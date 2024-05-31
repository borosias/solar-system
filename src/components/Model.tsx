import { Canvas, useFrame } from '@react-three/fiber';
import {Line, OrbitControls, Stars} from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef, useState, useMemo } from 'react';

type PlanetProps = {
    position: [number, number, number];
    color: string;
    size: number;
    orbitRadius?: number;
    orbitSpeed?: number;
    emissive?: boolean;
};

const Planet: React.FC<PlanetProps> = ({
                                           position,
                                           color,
                                           size,
                                           orbitRadius = 0,
                                           orbitSpeed = 0,
                                           emissive = false,
                                       }) => {
    const mesh = useRef<THREE.Mesh>(null!);
    const [orbitPosition, setOrbitPosition] = useState(position);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.01; // Вращение вокруг своей оси
            const angle = (Date.now() * orbitSpeed) % (2 * Math.PI); // Угол вращения вокруг солнца
            const x = orbitRadius * Math.cos(angle);
            const y = position[1]; // Удерживаем высоту планеты постоянной
            const z = orbitRadius * Math.sin(angle);
            setOrbitPosition([x, y, z]); // Обновление позиции планеты на орбите
        }
    });

    // Создаем геометрию орбиты
    const orbitGeometry = useMemo(() => {
        const curve = new THREE.EllipseCurve(
            0, 0, // ax, aY
            orbitRadius, orbitRadius, // xRadius, yRadius
            0, 2 * Math.PI, // aStartAngle, aEndAngle
            false, // aClockwise
            0 // aRotation
        );
        const points = curve.getPoints(50);
        const orbit = new THREE.BufferGeometry().setFromPoints(points);
        return orbit;
    }, [orbitRadius]);

    return (
        <>
            <line geometry={orbitGeometry}>
                <lineBasicMaterial attach="material" color="white" linewidth={1} />
            </line>
            <mesh ref={mesh} position={orbitPosition}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                    color={color}
                    emissive={emissive ? color : 'black'}
                    emissiveIntensity={emissive ? 1 : 0}
                />
            </mesh>
        </>
    );
};

const SolarSystem: React.FC = () => {
    return (
        <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
            <ambientLight intensity={0.1} />
            <pointLight position={[0, 0, 0]} intensity={20} decay={1} distance={300} castShadow={true} />
            <Stars />

            {/* Sun */}
            <Planet position={[0, 0, 0]} color="yellow" size={5} emissive={true} />

            {/* Mercury */}
            <Planet position={[0, 0, 0]} color="gray" size={0.4} orbitRadius={10} orbitSpeed={0.000008} />

            {/* Venus */}
            <Planet position={[0, 0, 0]} color="orange" size={1} orbitRadius={15} orbitSpeed={0.000015} />

            {/* Earth */}
            <Planet position={[0, 0, 0]} color="blue" size={1} orbitRadius={20} orbitSpeed={0.00002} />

            {/* Mars */}
            <Planet position={[0, 0, 0]} color="red" size={0.5} orbitRadius={25} orbitSpeed={0.000025} />

            {/* Jupiter */}
            <Planet position={[0, 0, 0]} color="orange" size={1.5} orbitRadius={35} orbitSpeed={0.000005} />

            {/* Saturn */}
            <Planet position={[0, 0, 0]} color="yellow" size={1.2} orbitRadius={45} orbitSpeed={0.000003} />

            {/* Uranus */}
            <Planet position={[0, 0, 0]} color="lightblue" size={1} orbitRadius={55} orbitSpeed={0.000002} />

            {/* Neptune */}
            <Planet position={[0, 0, 0]} color="blue" size={1} orbitRadius={65} orbitSpeed={0.0000015} />

            <OrbitControls />
        </Canvas>
    );
};

export default SolarSystem;
