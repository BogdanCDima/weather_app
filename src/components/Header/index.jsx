import React, { useState, useEffect } from 'react';

import Toolbar from '@material-ui/core/Toolbar';

import { useDispatch } from "react-redux";

import { getCurrentWeather } from '../../redux/CurrentWeather/actions';

import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import StyledContainer from './style';

export default function Header() {

    const [location, setLocation] = useState('');
    const [unit, setUnit] = useState('metric');

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getCurrentWeather(location, unit));
    }

    useEffect(() => {
        dispatch(getCurrentWeather(location, unit));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [unit, dispatch])

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
