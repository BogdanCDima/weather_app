import React from 'react';

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

import StyledContainer from './style';

export default function Navigation() {


    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <StyledContainer>
            <Container maxWidth="lg">
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Today" component={Link} to="/today" />
                    <Tab label="7 Days" component={Link} to="/extended" />
                </Tabs>
            </Container>
        </StyledContainer>
    );
}
