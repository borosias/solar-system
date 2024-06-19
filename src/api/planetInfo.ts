import {ApiResponse, Planet} from "../types/TPlanet";


const apiUrl: string = 'https://api.le-systeme-solaire.net/rest/bodies/';

export async function getPlanetData(name: string) {
    try {
        const response: Response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        const planet: Planet | undefined = data.bodies.find(
            body => body.englishName.toLowerCase() === name.toLowerCase()
        );

        if (planet) {
            return planet;
        } else {
            console.error(`Planet with name ${name} not found`);
            return null;
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}


