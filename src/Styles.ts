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

    textarea {
        width: 65vw;
        height: 200px;
        resize: none;
    }

`

export const buttonStyle = css`
    width: 70px;
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
    background: #303030;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
`

export const gapMaker = css`
    display: grid;
    grid-gap: 2em;
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