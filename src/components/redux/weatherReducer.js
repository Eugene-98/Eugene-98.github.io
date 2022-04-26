import { FETCH_WAETHER } from "./types";

const initialState = {
    fetchedWeather: []
}
export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WAETHER :
            return {
                ...state,
                fetchedWeather: action.actual
            };
        default: 
        return state;
    }
};