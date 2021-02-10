// eslint-disable-next-line
import React from 'react'
import { headerContainer, imgContainer, headerText } from '../Styles'

/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'




const Header = () => {

    return (
        <div css={headerContainer}>
            <div css={imgContainer}>
                <img src={require('../assets/profile-pic-min.jpg')} alt='profile' />
                <img src={require('../assets/wa-logo.png')} alt='walogo' />
            </div>
            <div css={headerText}>
                En blogg om praksisperioden hos WA.works
            </div>
        </div>
    )
}

export default Header