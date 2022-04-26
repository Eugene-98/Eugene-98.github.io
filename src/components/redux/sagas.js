import {put, call, takeEvery} from 'redux-saga/effects';
import { FETCH_WAETHER, REQUEST_WAETHER } from "./types";

const API = 'https://api.openweathermap.org/data/2.5/onecall?lat=53&lon=27&exclude=current,minutely,daily,alerts&units=metric&appid=9e6004ba18576ff18093d53f2e5b4033'

export default function* watchFetchWeather() {
    yield takeEvery(REQUEST_WAETHER, fetchWeatherAsync)
}

function* fetchWeatherAsync() {
    const payload = yield call(fetchWeathers)
    console.log(payload)
    const actual = payload.hourly
    console.log(actual)
    yield put({type: FETCH_WAETHER, actual})
}

async function fetchWeathers() {
    
    const response = await fetch(API)
    return await response.json()
}