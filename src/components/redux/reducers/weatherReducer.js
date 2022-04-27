import { FETCH_WAETHER, RESET_WEATHER } from "../types";

const initialState = {
    fetchedWeather: [],
    status: false
}
export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WAETHER:
            return {
                ...state,
                fetchedWeather: action.actual,
                status: true
            };
        case RESET_WEATHER:
            return {
                ...state,
                fetchedWeather: [],
                starus:false
            }
        default: 
        return state;
    }
};