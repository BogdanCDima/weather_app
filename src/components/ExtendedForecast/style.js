import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        height: 100vh;

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

        .todays-forecast-section {
            display: flex;
            justify-content: space-around;
        }

        .MuiAccordionDetails-root {
            padding-top: 0;
            margin-top: -20px;
        }

        .temp {
            span {
                font-size: 25px;
                font-weight: 600;
            }
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

        .status {
            display: flex;
            flex-grow: 6;
            align-items: center;

            span {
                text-transform: capitalize;
            }
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

        .MuiDivider-flexItem {
            height: 1px;
        }

        .MuiTableRow-root {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .pop-data {    
            width: 80px;
            display: flex;
            
            svg {
                margin-right: 15px;
            }
        }
        
        .main-info {
            padding: 0;
            span {
                text-transform: capitalize;
            }
        }
        
        .pop-and-wind {
            padding-left: 50px;
        }

        .MuiPaper-elevation1 {
            box-shadow: none;
        }

        .secondary-info {
            border: 1px;
            border: 1px solid rgba(0, 0, 0, 0.12);
        }

        .weather-icon-main {
            width: 90px;
        }

        .condition-icon-main {
            margin: 0 15px;
        }

        .temp-main {
            font-size: 30px;
            font-weight: 600;
            span {
                font-size: 50px;
            }
        }
        
        .list-row .MuiTypography-colorTextSecondary {
            color: rgba(0, 0, 0, 0.54);
            font-weight: 600;
            color: #000;
            font-size: 19px;
        }

        .Mui-expanded {
            background-color: #fafafa;
            border-radius: 10px;
        }

    `}
`;