import {Planet} from "./TPlanet.ts";

export interface PlanetInfoBoxProps {
    planetInfo: Planet;
    onClose: () => void;
}