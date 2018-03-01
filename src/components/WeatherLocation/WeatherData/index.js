import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constant/weathers'
import './styles.css'


const WeatherData = () => (
    <div>
        <WeatherTemperature temperature = {'holi'} weatherState = {RAIN}/>
        <WeatherExtraInfo humidity = {80} wind = {'10m/s'}/>
    </div>
)

export default WeatherData;