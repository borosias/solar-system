export type PlanetProps = {
    position: [number, number, number];
    color: string;
    size: number;
    orbitRadius?: number;
    orbitSpeed?: number;
    emissive?: boolean;
};