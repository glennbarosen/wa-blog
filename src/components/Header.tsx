import React from 'react'
import { headerContainer, imgContainer, headerText } from '../Styles'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Header = () => {
    return (
        <div css={headerContainer}>
            <div css={imgContainer}>
                <img src={require('../assets/profile-pic.jpg')} alt='profile picture' />
                <img src={require('../assets/wa-logo.png')} alt='profile picture' />
            </div>
            <div css={headerText}>
                <h1>Glenn Barosen</h1>
                <h3>En blogg om praksisperioden hos WA.works</h3>
            </div>
        </div>
    )
}

export default Header