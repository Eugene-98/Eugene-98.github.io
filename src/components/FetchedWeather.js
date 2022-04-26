import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchWeather } from './redux/actions'

export default () => {
    const dispatch = useDispatch()
    const weathers = useSelector(state => state.weather.fetchedWeather)
    console.log(weathers);

    return (
    <>
    <div>
        <button className="btn btn-outline-primary" onClick={() => dispatch(fetchWeather())}>
            Show
        </button>
    </div>
    <div>
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <tbody>
                <tr>
                    <td>Time</td>
                    <td>Temperature</td>
                </tr>
                    {weathers.map(w => <tr key={w.dt}>
                    <td>{correctData(w.dt)}</td>
                    <td>{w.temp}</td>
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