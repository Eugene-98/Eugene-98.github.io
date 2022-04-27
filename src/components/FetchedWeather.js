import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchWeather, resetWeather } from './redux/actions'

export default () => {
    const dispatch = useDispatch()
    const weathers = useSelector(state => state.weather.fetchedWeather)
    console.log(weathers);

    return (
    <>
    <div className='row justify-content-between'>
        <div className='col-4'>
            <button className="btn btn-outline-primary" onClick={() => dispatch(fetchWeather())}>
                Show
            </button>
        </div>
        <div className='col-1 '>
            <button className="btn btn-outline-danger me-md-2" onClick={() => dispatch(resetWeather())}>
                Reset
            </button>
        </div>
    </div>
    
    <div>
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <tbody>
                <tr>
                    <td>Time</td>
                    <td>Temperature</td>
                    <td>Feels like</td>
                    <td>Rain</td>
                </tr>
                    {weathers.map(w => <tr key={w.dt}>
                    <td>{correctData(w.dt)}</td>
                    <td>{w.temp}</td>
                    <td>{w.feels_like}</td>
                    <td>{checkRain(w.rain)}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
        
    </>
    )
}

function correctData (w) {
    let correctDt = new Date(w*1000)
    let correctTime = new Date(w*1000)
    const correct = correctTime.toLocaleTimeString("ru-RU")+' '+correctDt.toLocaleDateString("ru-RU") 
    return correct
}

function checkRain(w) {
    if (!w) {
        return 'No rain'
    }
    return 'Rain'
}