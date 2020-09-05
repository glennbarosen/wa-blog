import { css } from '@emotion/core'

export const navbarContainer = css`
    display: flex;
    justify-content: flex-end;
    width: 100vw;
`

export const adminContainer = css`
    font-family: 'Montserrat';
    color: #DDDDDD;
    display: grid;
    place-items: center;

    input {
        border: solid #767676 1px;
        background: #333;
        color: #DDDDDD;
        margin-bottom: 20px;
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
    input:focus, textarea:focus{
        outline: none;
    }
    
    button {
        color: #fff !important;
        text-transform: uppercase;
        text-decoration: none;
        background: #60a3bc;
        padding: 15px;
        width: 100px;
        text-align: center;
        border-radius: 50px;
        display: inline-block;
        border: none;
        transition: all 0.4s ease 0s;

        :hover {
            text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
            box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            transition: all 0.4s ease 0s;
        }
    }
`

export const buttonStyle = css`
    width: 80px;
    text-align: center;
    color: #20bf6b !important;
    text-transform: uppercase;
    background: #ffffff;
    margin: 20px;
    padding: 10px;
    border: 4px solid #20bf6b !important;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;

    :hover {
        color: #494949 !important;
        border-radius: 50px;
        border-color: #494949 !important;
        transition: all 0.3s ease 0s;
    }
`

export const headerContainer = css`
    display: grid;
    height: 60vh;
    place-items: center;
`

export const buttonContainer = css`
    display: grid;
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
    background: #333;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
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
    font-weight: lighter;
    white-space: pre-line;
`
export const postFooter = css`
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-size: 1em;
`

export const timerDiv = css`
    margin-top: 50px;
`