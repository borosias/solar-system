export interface ObjectProps {
    position: [number, number, number];
    color?: string;
    size: number;
    orbitRadius?: number;
    orbitSpeed?: number;
    emissive?: boolean;
    pName: string
}

export interface ClickablePlanetProps extends ObjectProps {
    onClick: (planetInfo: ObjectProps) => void;
}

export interface Mass {
    massValue: number;
    massExponent: number;
}

export interface Moon {
    moon: string;
    rel: string;
}

export interface Planet {
    englishName: string;
    meanRadius: number;
    mass: Mass;
    gravity: number;
    density: number;
    moons?: Moon[];
    isPlanet: boolean;
    semimajorAxis: number;
    sideralOrbit: number;
}

export interface ApiResponse {
    bodies: Planet[];
}
