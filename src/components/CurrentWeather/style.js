import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        width: 100%;
        height: auto;

        .main-info-wrapper {
            display: flex;
            width: 100%;
            height: auto;
            background: rgb(9,112,145);
            background: linear-gradient(180deg, rgba(9,112,145,1) 0%, rgba(53,144,174,1) 50%);
            margin: 10px 0;
            padding: 25px;
            color: #fff;
            justify-content: space-between;
            box-sizing: border-box;
            border-radius: 10px;
        }

        .main-info {
            text-align: left;
        }

        .weather-description, .min-max-temp {
            text-transform: capitalize;
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 10px;
        }

        .location {
            font-size: 22px;
            font-weight: 400;
        }

        .current-temp {
            font-weight: 400;
        }

        .side-info {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            text-align: end;
        }

        .weather-icon-wrapper {
            width: 100px;
            height: 100px;
        }

        .weather-icon {
            width:150px;
            margin-top: -35px;
            margin-left: -15px;
        }
    `}
`;