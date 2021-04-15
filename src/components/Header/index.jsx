import React, { useState, useEffect } from 'react';

import Toolbar from '@material-ui/core/Toolbar';

import { useDispatch, useSelector } from "react-redux";

import { getLocation } from '../../redux/Location/actions';
import { getCurrentLocation } from '../../redux/Location/actions';
import { getWeatherData } from '../../redux/WeatherData/actions';
import { getHistoricalData } from '../../redux/HistoricalData/actions';

import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import StyledContainer from './style';

export default function Header() {

    const [location, setLocation] = useState('');
    const [curentLocation, setCurentLocation] = useState(null);
    const [unit, setUnit] = useState('metric');

    const locationData = useSelector(state => state.location);

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getLocation(location, unit));
    }

    useEffect(() => {
        curentLocation && dispatch(getCurrentLocation(curentLocation));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curentLocation])

    useEffect(() => {
        !curentLocation && navigator.geolocation.getCurrentPosition((pos) => {
            setCurentLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        },
            (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }, {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        })
    });

    useEffect(() => {
        curentLocation && dispatch(getWeatherData(curentLocation.lat, curentLocation.lon, unit));
        curentLocation && dispatch(getHistoricalData(curentLocation.lat, curentLocation.lon, unit));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curentLocation, dispatch]);
    useEffect(() => {
        locationData.data.data && dispatch(getWeatherData(locationData.data.data[0].lat, locationData.data.data[0].lon, unit));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationData, dispatch, unit]);

    useEffect(() => {
        locationData.data.data && dispatch(getHistoricalData(locationData.data.data[0].lat, locationData.data.data[0].lon, unit));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationData.data, dispatch, unit]);

    return (
        <StyledContainer>
            <Container maxWidth="lg">
                <Toolbar className="menu-bar" variant="dense">
                    <form className="search-location-form" onSubmit={handleSearch}>
                        <InputBase
                            className="search-location"
                            placeholder="Search City or Zip Code"
                            value={location}
                            onChange={event => setLocation(event.target.value)}
                        />
                        <IconButton className="search-location-button" type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </form>
                    <ButtonGroup variant="text" size="small" aria-label="outlined primary button group">
                        <Button onClick={() => setUnit('imperial')}>&deg;F</Button>
                        <Button onClick={() => setUnit('metric')}>&deg;C</Button>
                    </ButtonGroup>
                </Toolbar>
            </Container>
        </StyledContainer>
    );
}
