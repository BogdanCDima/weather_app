import React from 'react';

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import StyledContainer from './style';

export default function Navigation({ toggle, view }) {

    const handleChange = (event, newValue) => {
        toggle(newValue);
    };

    return (
        <StyledContainer>
            <Container maxWidth="lg">
                <Tabs value={view} onChange={handleChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Today" />
                    <Tab label="7 Day" />
                </Tabs>
            </Container>
        </StyledContainer>
    );
}
