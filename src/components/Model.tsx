import {Canvas, extend, useFrame, useThree} from '@react-three/fiber';
import {OrbitControls, Stars} from '@react-three/drei';
import React, {useEffect, useState} from 'react';
import SpaceObject from './SpaceObject.tsx'; // Импортируйте компонент Planet
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

const CameraController: React.FC<{ selectedPlanet: ObjectProps | null }> = ({selectedPlanet}) => {
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
            maxDistance={100}
            minDistance={1}
        />
    );
};

//===============================================================================

const SolarSystem: React.FC = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<ObjectProps | null>(null);
    const names: string[] = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    const [spaceObjectsData, setSpaceObjectsData] = useState<Planet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSpaceObjectsData = async () => {
            const dataPromises = names.map(name => getPlanetData(name));
            const data = await Promise.all(dataPromises);
            setSpaceObjectsData(data.filter(item => item !== null) as Planet[]);
            setLoading(false); // Устанавливаем загрузку в false после получения данных
        };

        fetchSpaceObjectsData();
    }, []);

    const handlePlanetClick = (planetInfo: ObjectProps) => {
        setSelectedPlanet(planetInfo);
    };
    const handleCloseInfoBox = () => {
        setSelectedPlanet(null);
    };

    const planetInfo = selectedPlanet ? spaceObjectsData.find(object => object.englishName.toLowerCase() === selectedPlanet.pName.toLowerCase()) : null;

    if (loading) {

        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <>
            <Canvas camera={{position: [0, 0, 100], fov: 60, far: 10000}}>
                <ambientLight intensity={0.1}/>
                <pointLight position={[0, 0, 0]} intensity={20} decay={1} distance={300} castShadow={true}/>
                <Stars count={12000} radius={400} depth={500} factor={10}/>

                {/* Sun */}
                <SpaceObject
                    pName={names[0]}
                    position={[0, 0, 0]}
                    size={5}
                    color="orange"
                    emissive={true}
                    orbitRadius={0}
                    orbitSpeed={0}
                    onClick={handlePlanetClick}
                    textureUrl={sunTexture}
                />

                {/* Mercury */}
                <SpaceObject pName={names[1]} position={[0, 0, 0]} size={0.4} orbitRadius={10}
                             orbitSpeed={0.000008} emissive={false} onClick={handlePlanetClick} textureUrl={mercuryTexture} />

                {/* Venus */}
                <SpaceObject pName={names[2]} position={[0, 0, 0]} size={1} orbitRadius={15}
                             orbitSpeed={0.000015} emissive={false} onClick={handlePlanetClick} textureUrl={venusTexture}/>

                {/* Earth */}
                <SpaceObject pName={names[3]} position={[0, 0, 0]} size={1} orbitRadius={20}
                             orbitSpeed={0.00002} emissive={false} onClick={handlePlanetClick} textureUrl={earthTexture}/>

                {/* Mars */}
                <SpaceObject pName={names[4]} position={[0, 0, 0]} size={0.5} orbitRadius={25}
                             orbitSpeed={0.000015} emissive={false} onClick={handlePlanetClick} textureUrl={marsTexure}/>

                {/* Jupiter */}
                <SpaceObject pName={names[5]} position={[0, 0, 0]} size={1.5} orbitRadius={35}
                             orbitSpeed={0.000005} emissive={false} onClick={handlePlanetClick} textureUrl={jupiterTexture}/>

                {/* Saturn */}
                <SpaceObject pName={names[6]} position={[0, 0, 0]} size={1.2} orbitRadius={45}
                             orbitSpeed={0.000003} emissive={false} onClick={handlePlanetClick} textureUrl={saturnTexture}/>

                {/* Uranus */}
                <SpaceObject pName={names[7]} position={[0, 0, 0]} size={1} orbitRadius={55}
                             orbitSpeed={0.000002} emissive={false} onClick={handlePlanetClick} textureUrl={uranusTexture}/>

                {/* Neptune */}
                <SpaceObject pName={names[8]} position={[0, 0, 0]} size={1} orbitRadius={65}
                             orbitSpeed={0.0000015} emissive={false} onClick={handlePlanetClick} textureUrl={neptuneTexture}/>

                <CameraController selectedPlanet={selectedPlanet}/>
            </Canvas>

            {selectedPlanet && planetInfo && (
                <PlanetInfoBox planetInfo={planetInfo} onClose={handleCloseInfoBox}/>
            )}
        </>
    );
};

export default SolarSystem;
