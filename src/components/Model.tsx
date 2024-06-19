import {Canvas, extend, useFrame, useThree} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';
import React, {useEffect, useState} from 'react';
import SpaceObject from './SpaceObject.tsx';
import {ObjectProps, Planet} from "../types/TPlanet.ts";
import {getPlanetData} from "../api/planetInfo.ts";
import PlanetInfoBox from "./PlanetInfoDialog.tsx";

import sunTexture from '../textures/sun.jpg';
import mercuryTexture from '../textures/mercury.jpg';
import venusTexture from '../textures/venus.jpg';
import earthTexture from '../textures/earth.jpg';
import marsTexure from '../textures/mars.jpg';
import jupiterTexture from '../textures/jupiter.jpg';
import saturnTexture from '../textures/saturn.jpg';
import uranusTexture from '../textures/uranus.jpg';
import neptuneTexture from '../textures/neptune.jpg';

extend({OrbitControls});

const CameraController: React.FC<{ selectedPlanet: ObjectProps | null }> =
    ({selectedPlanet}) => {
        const {camera, gl} = useThree();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const controls = React.useRef<any>();

        useFrame(() => {
            if (controls.current) {
                controls.current.update();
            }
        });

        useEffect(() => {
            if (selectedPlanet) {
                // Центрируем камеру вокруг выбранной планеты
                controls.current.target.set(...selectedPlanet.position);
            }
        }, [selectedPlanet]);

        return (
            <OrbitControls
                ref={controls}
                args={[camera, gl.domElement]}
                enableDamping
                dampingFactor={0.1}
                rotateSpeed={0.5}
                minDistance={1}
            />
        );
    };

//===============================================================================

const SolarSystem: React.FC = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<ObjectProps | null>(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const names: string[] = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    const textures = [sunTexture, mercuryTexture, venusTexture, earthTexture, marsTexure, jupiterTexture, saturnTexture, uranusTexture, neptuneTexture]
    const [spaceObjectsData, setSpaceObjectsData] = useState<Planet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSpaceObjectsData = async () => {
            const cachedData = localStorage.getItem('spaceObjectsData');
            if (cachedData) {
                try {
                    const parsedData = JSON.parse(cachedData);
                    setSpaceObjectsData(parsedData);
                    setLoading(false);
                } catch (error) {
                    console.error('Error parsing data from localStorage:', error);
                    localStorage.removeItem('spaceObjectsData');
                }
            } else {
                let retries = 3;
                const fetchData = async () => {
                    try {
                        const dataPromises = names.map(name => getPlanetData(name));
                        const data = await Promise.all(dataPromises);
                        const filteredData = data.filter(item => item !== null) as Planet[];
                        setSpaceObjectsData(filteredData);
                        localStorage.setItem('spaceObjectsData', JSON.stringify(filteredData));
                        setLoading(false);
                    } catch (error) {
                        console.error('Error fetching data from API:', error);
                        retries--;
                        if (retries > 0) {
                            setTimeout(fetchData, 1000 * (3 - retries));
                        } else {
                            localStorage.removeItem('spaceObjectsData');
                        }
                    }
                };
                fetchData();
            }
        };

        fetchSpaceObjectsData();
    }, [names]);

    const getOrbit = (name: string) => {
        const planetData = spaceObjectsData.find(
            object => object.englishName.toLowerCase() === name.toLowerCase());
        return planetData?.semimajorAxis || 0;
    };

    const getSize = (name: string) => {
        const planetData = spaceObjectsData.find(
            object => object.englishName.toLowerCase() === name.toLowerCase());
        return planetData?.meanRadius || 0;
    };

    const getSpeed = (name: string) => {
        const planetData = spaceObjectsData.find(
            object => object.englishName.toLowerCase() === name.toLowerCase());
        return planetData?.sideralOrbit || 0;
    };

    const handlePlanetClick = (planetInfo: ObjectProps) => {
        setSelectedPlanet(planetInfo);
    };

    const handleCloseInfoBox = () => {
        setSelectedPlanet(null);
    };

    const planetInfo = selectedPlanet
        ?
        spaceObjectsData.find(
            object => object.englishName.toLowerCase() === selectedPlanet.pName.toLowerCase())
        :
        null;

    if (loading) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <>
            <Canvas camera={{position: [0, 0, 300], fov: 60, far: 35000}}>
                <ambientLight intensity={0.1}/>
                <pointLight position={[0, 0, 0]} intensity={500} decay={1} distance={15000} castShadow={true}/>
                <Stars count={15000} radius={10000} depth={1000} factor={40}/>
                <SpaceObject
                    pName={names[0]}
                    position={[0, 0, 0]}
                    size={getSize(names[0]) * 0.00009}
                    emissive={true}
                    orbitRadius={0}
                    orbitSpeed={0}
                    onClick={handlePlanetClick}
                    textureUrl={sunTexture}
                />
                {spaceObjectsData &&
                    names.map((name, index) => (
                        <SpaceObject
                            key={name}
                            pName={name}
                            position={[0, 0, 0]}
                            size={getSize(name) * (name === "Sun" ? 0.0000002 : 0.0002)}
                            orbitRadius={getOrbit(name) * 0.000002}
                            orbitSpeed={1 / getSpeed(name) * 0.0001}
                            emissive={name === "Sun"}
                            onClick={handlePlanetClick}
                            textureUrl={textures[index]}
                        />
                    ))
                }
                <CameraController selectedPlanet={selectedPlanet}/>
            </Canvas>

            {selectedPlanet && planetInfo && (
                <PlanetInfoBox planetInfo={planetInfo} onClose={handleCloseInfoBox}/>
            )}
        </>
    );
};

export default SolarSystem;
