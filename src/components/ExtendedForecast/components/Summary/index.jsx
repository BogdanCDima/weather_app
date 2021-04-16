import React from 'react';

import Typography from '@material-ui/core/Typography';
import { CloudRain } from 'react-feather';

import moment from 'moment';

import StyledContainer from './style';

export default function Summary({ day, index, accordionIndex, expanded }) {

    return (
        <StyledContainer>
            <div className="acc-summary">
                <div className="date">
                    <Typography>
                        {index === 0 ? "Today" : moment(day.dt * 1000).format("ddd DD")}
                    </Typography>
                </div>
                {expanded !== accordionIndex && (
                    <React.Fragment>

                        <Typography className="temp"><span>{parseInt(day.temp.max)}&deg;</span>/{parseInt(day.temp.min)}&deg;</Typography>
                        <div className="status">

                            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].main} />
                            <span>{day.weather[0].description}</span>
                        </div>
                        <div className="pop" align="right"><div className="pop-data" align="left"><CloudRain className="rain-icon" /><span>{parseInt(day.pop * 100)}%</span></div></div>
                    </React.Fragment>
                )}
            </div>
        </StyledContainer>
    )
}
