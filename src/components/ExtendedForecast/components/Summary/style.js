import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        display: flex;
        width: 100%;
        align-items: center;

        .date, .temp, .pop {
            flex-grow: 1;
            max-width: 100px;
        }

        .temp {
            span {
                font-size: 25px;
                font-weight: 600;
            }
        }

        .status {
            display: flex;
            flex-grow: 6;
            align-items: center;

            span {
                text-transform: capitalize;
            }
        }

        .rain-icon {
            color: #374CAB;
            width: 15px;
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
    `}
`;