import {useFrame, useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import React, {useRef, useState, useMemo} from 'react';
import {ObjectProps} from "../types/TPlanet.ts";

interface ClickablePlanetProps extends ObjectProps {
    onClick?: (planetInfo: ObjectProps) => void;
    textureUrl: string;
}

const SpaceObject: React.FC<ClickablePlanetProps> = (
    {
        position,
        color,
        size,
        orbitRadius = 0,
        orbitSpeed = 0,
        emissive = false,
        pName,
        textureUrl,
        onClick
    }) => {
    const mesh = useRef<THREE.Mesh>(null!);
    const [orbitPosition, setOrbitPosition] = useState(position);

    // Загрузите текстуру с помощью useLoader
    const planetTexture = useLoader(THREE.TextureLoader, textureUrl);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.001;
            const angle = (Date.now() * orbitSpeed) % (2 * Math.PI);
            const x = orbitRadius * Math.cos(angle);
            const y = position[1];
            const z = orbitRadius * Math.sin(angle);
            setOrbitPosition([x, y, z]);
        }
    });

    const orbitGeometry = useMemo(() => {
        const curve = new THREE.EllipseCurve(
            0, 0,
            orbitRadius, orbitRadius,
            0, 2 * Math.PI,
            false,
            Math.PI / 2
        );
        const points = curve.getPoints(500);
        const orbit = new THREE.BufferGeometry().setFromPoints(points);
        orbit.applyMatrix4(new THREE.Matrix4().makeRotationX(Math.PI / 2));
        return orbit;
    }, [orbitRadius]);

    return (
        <>
            <line>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attach="attributes-position"
                        count={orbitGeometry.attributes.position.array.length / 3}
                        array={orbitGeometry.attributes.position.array}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial attach="material" color="white" linewidth={0.1} transparent opacity={0.3}/>
            </line>
            <mesh
                ref={mesh}
                position={orbitPosition}
                onClick={() => onClick && onClick({
                    position: orbitPosition,
                    color,
                    size,
                    orbitRadius,
                    orbitSpeed,
                    emissive,
                    pName
                })}
            >
                <sphereGeometry args={[size, 64, 64]}/>
                {pName === "Sun" ?
                    <>
                        <meshPhysicalMaterial
                            lightMap={planetTexture}
                            map={planetTexture}
                            lightMapIntensity={5}
                            emissive={emissive ? 'white' : 'black'}
                            emissiveIntensity={emissive ? 0.01 : 0}
                        />
                        <pointLight color="yellow" distance={0} intensity={1.5} decay={2}/>
                    </>
                    :
                    <meshPhysicalMaterial
                        map={planetTexture}
                        color={color}
                        emissive={emissive ? 'white' : 'black'}
                        emissiveIntensity={emissive ? 0.01 : 0}
                    />
                }
            </mesh>
        </>
    );
};

export default SpaceObject;
