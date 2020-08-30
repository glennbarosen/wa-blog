import React from 'react'
import { headerContainer, headerImgs, headerText, headerTextItems } from '../styles/headerStyles'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'


const Header = () => {
    const style = { headerContainer }
    return (
        <div css={headerContainer}>
            <div></div>
            <div css={headerImgs}>
                <div></div>
                <img src={require('../assets/profile-pic.jpg')} alt='profile picture' />
                <img src={require('../assets/wa-logo.png')} alt='profile picture' />
                <div></div>
            </div>
            <div css={headerText}>
                <div css={headerTextItems}>
                    <h1>Glenn Barosen</h1>
                    <h3>En blogg om praksisperioden hos WA.works</h3>
                </div>
            </div>
            <div></div>

        </div>
    )
}

export default Header