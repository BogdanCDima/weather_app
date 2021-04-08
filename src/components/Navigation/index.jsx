import React, { useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import StyledContainer from './style';

export default function Navigation({ toggle, view }) {


    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        toggle(value ? "extended" : "today");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <StyledContainer>
            <Container maxWidth="lg">
                <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
                    <Tab label="Today" />
                    <Tab label="7 Days" />
                </Tabs>
            </Container>
        </StyledContainer>
    );
}
