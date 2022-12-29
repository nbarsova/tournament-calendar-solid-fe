import {getCurrentHost} from "./apiConfig";

const host = getCurrentHost();

export async function fetchLocations() {
    let response: Response = await fetch(host+"locations");
    return await response.json();
}
