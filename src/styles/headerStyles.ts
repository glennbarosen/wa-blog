import { css } from '@emotion/core'

export const headerContainer = css`
    display: grid;
    grid-template-columns:  10% 40% 40% 10%;
    
`

export const headerImgs = css`
    display: grid;
    grid-template-columns: 10% 40% 40% 10%;
    place-items: center;
    height: 50vh;
    

    img {
        margin: 20px;
        width: 200px;
        border-radius: 100%;

    }
`

export const headerText = css`
    padding: 22vh 0;
    

`

export const headerTextItems = css`
    color: #DDDDDD;

    h1{
        font-family: 'Space Mono';
        font-size: 60px;
        font-weight: bold;
    }

    h3 {
        font-family: 'Montserrat';
        font-size: 30px;
        font-weight: normal;
    }

`