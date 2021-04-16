import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        .circular-progress {
            margin: auto;
        }
    `}
`;
