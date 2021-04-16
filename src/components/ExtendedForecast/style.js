import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        .title {
            font-size: 25px;
            font-weight: 800;
            margin-bottom: 20px;
            padding: 0 16px;

            span {
                font-size: 16px;
                font-weight: 400;
            }
        }

        .extended-forecast {
            width: 100%;
            height: auto;
            text-align: left;
            background-color: #fff;
            margin: 10px 0;
            padding: 25px;
            border-radius: 10px;
            box-sizing: border-box;
        }

        .MuiAccordionDetails-root {
            padding-top: 0;
            margin-top: -20px;
        }

        .acc-summary {
            display: flex;
            width: 100%;
            align-items: center;
        }

        .date, .temp, .pop {
            flex-grow: 1;
            max-width: 100px;
        }

        .condition-icon {
            color: #374CAB;
            margin: 15px;
        }

        .rain-icon {
            color: #374CAB;
            width: 15px;
        }

        .list-row {
            display: flex;
            width: 100%;
            background-color: #fafafa;
        }

        .MuiAccordionDetails-root {
            display: block;
        }

        .Mui-expanded {
            background-color: #fafafa;
            border-radius: 10px;
        }

    `}
`;