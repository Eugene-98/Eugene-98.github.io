import { REQUEST_WAETHER, RESET_WEATHER } from "./types";

export function fetchWeather(){
    return {
        type: REQUEST_WAETHER
    }
}

export function resetWeather(){
    return {
        type:RESET_WEATHER
    }
}