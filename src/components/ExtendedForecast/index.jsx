import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import Summary from './components/Summary'
import AccordionDetailsSection from './components/AccordionDetailsSection'


import StyledContainer from './style';

export function ExtendedForecast({ forecastData, locationData }) {

    const [expanded, setExpanded] = React.useState(false);



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <StyledContainer>
            <div className="extended-forecast">
                {locationData && <Typography className="title" variant="h5" component="h1" >7 Day Weather <span className="location">- {locationData[0].name}, {locationData[0].country} </span></Typography>}
                {forecastData && (<div>
                    {forecastData.daily.map((day, index) => {
                        const accordionIndex = `panel${index + 1}`
                        return (
                            <Accordion expanded={expanded === accordionIndex} onChange={handleChange(accordionIndex)} key={day.dt}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Summary day={day} index={index} accordionIndex={accordionIndex} expanded={expanded} />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <AccordionDetailsSection day={day} />
                                </AccordionDetails>
                                <Divider component="div" flexItem />
                            </Accordion>
                        )
                    })}

                </div>)}
            </div>
        </StyledContainer>
    )
}

export default ExtendedForecast;
