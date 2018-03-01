import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div className='weatherDataCont'>
        <Location city = {'Santiago'}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;