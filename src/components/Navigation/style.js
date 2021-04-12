import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        background-color: #063749;

        .MuiTab-textColorPrimary.Mui-selected, .MuiTab-textColorPrimary {
            color: #fff;
        }

        .PrivateTabIndicator-colorPrimary-2 {
            background-color: #fff;
        }
    `}
`;
