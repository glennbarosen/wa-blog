import { css } from '@emotion/core'

export const appContainer = css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
    grid-gap: 1em;
`

export const headerContainer = css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 80vh;
    place-items: center;
`

export const imgContainer = css`
    align-self: end;
    display: flex;
    justify-content: space-between;
    width: 500px;
    img {
        width: 200px;
        height: auto;
        border-radius: 100px;
    }
`

export const headerText = css`
    width: 500px;
    color: #DDDDDD;
    h1 {
        font-family: 'Space Mono';
        font-size: 3em;
    }
    h3 {
        font-family: 'Montserrat';
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
    width: 50vw;
    border-radius: 20px;
    background: #303030;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
`

export const gapMaker = css`
    display: grid;
    grid-gap: 2em;
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
`
export const postFooter = css`
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-size: 1em;
`