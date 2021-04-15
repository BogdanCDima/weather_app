import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        width: 100%;
        height: auto;
        text-align: left;
        background-color: #fff;
        margin: 10px 0;
        padding: 25px;
        border-radius: 10px;
        box-sizing: border-box;

        .todays-forecast-section {
            display: flex;
            justify-content: space-around;
        }

        .MuiGrid-root {
            margin-top: 0px;
        }

        .MuiDivider-flexItem {
            width: 2px;
            background: rgb(211,211,211);
            background: radial-gradient(circle, rgba(211,211,211,1) 0%, rgba(255,255,255,1) 95%);
            margin: -1px;
        }
    `}
`;