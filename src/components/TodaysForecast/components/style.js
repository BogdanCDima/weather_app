import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        text-align: center;

        .weather-icon {
            margin: -20px;
            width: 150px;
            height: 150px;
        }

        .active {
            .MuiTypography-colorTextPrimary, .MuiTypography-h3 {
                font-weight: 600;
            }
        }
    `}
`;