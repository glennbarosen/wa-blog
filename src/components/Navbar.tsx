// eslint-disable-next-line
import React, { useState } from 'react'
import { navbarContainer, buttonStyle } from '../Styles'


/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'
import { useHistory, useLocation } from 'react-router-dom'

interface INavbarProps {
    user: string
    signOutUser: () => void
    getEmail: () => string
}


const Navbar = (props: INavbarProps) => {


    const [buttonText, setButtonText] = useState('logg inn')
    const history = useHistory()
    const location = useLocation()

    const handleClick = () => {
        if (props.user === null) {
            history.push('/Auth')
            setButtonText('logg ut')

        } else {
            props.signOutUser()
            setButtonText('logg inn')
        }
    }

    if (location.pathname === '/Auth') {
        return (
            <div css={navbarContainer}>
            </div>
        )
    } else if (props.getEmail() === 'glennbarosen@gmail.com' && location.pathname !== '/Admin') {
        return (
            <div css={navbarContainer}>
                <div css={buttonStyle} onClick={() => { history.push('/Admin') }}>admin</div>
                <div css={buttonStyle} onClick={handleClick}>logg ut</div>
            </div>
        )
    } else if (location.pathname === '/Admin') {
        return (
            <div css={navbarContainer}>
                <div css={buttonStyle} onClick={() => { history.push('/') }}>hjem</div>
                <div css={buttonStyle} onClick={handleClick}>logg ut</div>
            </div>
        )
    } else {
        return (
            <div css={navbarContainer}>
                <div css={buttonStyle} onClick={handleClick}>{buttonText}</div>
            </div>

        )
    }
}
export default Navbar