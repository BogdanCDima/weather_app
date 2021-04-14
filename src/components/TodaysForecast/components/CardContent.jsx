import React from 'react';

import Typography from '@material-ui/core/Typography';

import StyledContainer from './style';

export function CardContent({ title, active, temp, icon, pop, historicalData }) {

    return (
        <StyledContainer>
            <div className={active ? "active" : ""}>
                <Typography color={active ? "textPrimary" : "textSecondary"} gutterBottom>{title}</Typography>
                <Typography color={historicalData ? "primary" : "textSecondary"} variant="h3" component="p" >{Math.round(temp)}&deg;</Typography>
                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon} />
                <Typography variant="body1">{pop}</Typography>
            </div>
        </StyledContainer>
    )
}

export default CardContent;
