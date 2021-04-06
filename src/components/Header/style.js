import styled, { css } from 'styled-components';

export default styled.div`
    ${() => css`
        background-color: #085B79;

        .menu-bar{
            display: flex;
            justify-content: space-between;
            height: 100px;
        }

        .search-location-form {
            display: flex;
            min-width: 400px;
            background-color: #397D94;
            border-radius: 30px;
            justify-content: space-between;
        
            .MuiInputBase-input {
                min-width: 360px;
                text-align: center;
                color: #fff;
                height: 30px;
            }

            .search-location-button {
                color: #fff;
            }
        }

        .MuiButtonGroup-grouped {
            color: #fff;
        }

        .MuiButtonGroup-groupedTextHorizontal:not(:last-child) {
            border-right: 1px solid #fff;
        }

        
        .MuiButtonGroup-root {
            height: 22px;
        }

    `}
`;