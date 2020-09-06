import { css } from '@emotion/core'

// NAVBAR
export const navbarContainer = css`
    display: flex;
    justify-content: flex-end;
    width: 100vw;
`

export const buttonStyle = css`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ff6565;
    margin: 10px;
    padding: 10px;
    width: 100px;
    text-align: center;
    border-radius: 50px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;

    :hover {
        cursor: pointer;
        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
        box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
`

// HEADER
export const headerContainer = css`
    display: grid;
    height: 60vh;
    place-items: center;
`

export const imgContainer = css`
    display: flex;
    width: 40vw;
    justify-content: space-around;
    img {
        width: 200px;
        height: 200px;
        border-radius: 100px;
    }
`

export const headerText = css`
    width: 40vw;
    color: #DDDDDD;
    margin-bottom: 30px;
    h1 {
        font-family: 'Space Mono', monospace;
        font-size: 3em;
    }
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5em;
        font-weight: lighter;
    }
`

// FEED
export const feedContainer = css`
    display: grid;
    place-items: center;
    height: auto;
`

export const postContainer = css`
    color: #DDDDDD;
    padding: 20px;
    display: grid;
    grid-gap: 1em;
    width: 70vw;
    border-radius: 20px;
    background: #262626;
    grid-template-rows: 1fr auto 0.5fr;
    -webkit-box-shadow: 5px 5px 50px 1px rgba(0,0,0,1);
    -moz-box-shadow: 5px 5px 50px 1px rgba(0,0,0,1);
    box-shadow: 5px 5px 50px 1px rgba(0,0,0,1);
`

export const gapMaker = css`
    display: grid;
    grid-gap: 30px;
    margin-bottom: 30px;
`

export const postTitle = css`
    display: grid;
    place-items: center;
    font-family: 'Space Mono';
    font-size: 1em;
`

export const postContent = css`
    font-family: 'Montserrat';
    font-size: 1em;
    font-weight: 300;
    white-space: pre-line;
`
export const postFooter = css`
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-size: 1em;
    font-weight: 600;
`

// ADMIN
export const adminContainer = css`
    font-family: 'Montserrat';
    color: #DDDDDD;
    display: grid;
    place-items: center;

    input {
        font-family: 'Montserrat';
        font-size: 1.2em;
        font-weight: 400;
        border: solid #767676 1px;
        background: #333;
        color: #DDDDDD;
        margin-bottom: 20px;
        height: 30px;
    }
    textarea {
        font-family: 'Montserrat';
        font-size: 1em;
        background: #333;
        color: #DDDDDD;
        border: solid #767676 1px;
        margin-bottom: 20px;
        width: 65vw;
        height: 200px;
        resize: none;
    }
    input:focus, textarea:focus, button:focus {
        outline: none;
    }
`




