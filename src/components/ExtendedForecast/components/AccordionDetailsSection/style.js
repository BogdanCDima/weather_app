import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        .date, .pop {
            flex-grow: 1;
            max-width: 100px;
        }
        
        .pop-data {    
            width: 80px;
            display: flex;
            
            svg {
                margin-right: 15px;
            }
        }
        
        .list-row .MuiTypography-colorTextSecondary {
            color: rgba(0, 0, 0, 0.54);
            font-weight: 600;
            color: #000;
            font-size: 19px;
        }

        .rain-icon {
            color: #374CAB;
            width: 15px;
        }

        .condition-icon {
            color: #374CAB;
            margin: 15px;
        }

        .pop-and-wind {
            padding-left: 50px;
        }
        

        .MuiDivider-flexItem {
            height: 1px;
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
        
    `}
`;
