// eslint-disable-next-line
import React from 'react'
import { navbarContainer, buttonStyle, navbarLogo, navLinks } from '../Styles'


/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'
import { useHistory, useLocation } from 'react-router-dom'

interface INavbarProps {
    user: any
    buttonText: string
    signOutUser: () => void
    getEmail: () => string
}


const Navbar = (props: INavbarProps) => {

    const history = useHistory()
    const location = useLocation()

    const handleSignInClick = () => {
        if (props.user === null) {
            history.push('/Auth')

        } else {
            props.signOutUser()
        }
    }

    if (location.pathname === '/Auth') {
        return (

            <div css={navbarContainer}>

                <div css={navbarLogo} onClick={() => history.push('/')}>GLENNBAROSEN</div>
            </div>
        )
    } else if (props.getEmail() === 'glennbarosen@gmail.com' && location.pathname !== '/Admin') {
        return (
            <div css={navbarContainer}>
                <div css={navbarLogo} onClick={() => history.push('/')}>GLENNBAROSEN</div>
                <div css={navLinks}>
                    <ul>
                        <li><div css={buttonStyle} onClick={() => { history.push('/Admin') }}>admin</div></li>
                        <li><div css={buttonStyle} onClick={handleSignInClick}>{props.buttonText}</div></li>
                    </ul>

                </div>
            </div>
        )
    } else if (location.pathname === '/Admin') {
        return (
            <div css={navbarContainer}>
                <div css={navbarLogo} onClick={() => history.push('/')}>GLENNBAROSEN</div>
                <div css={navLinks}>
                    <div css={buttonStyle} onClick={handleSignInClick}>{props.buttonText}</div>
                </div>
            </div>
        )
    } else {
        return (
            <div css={navbarContainer}>
                <div css={navbarLogo} onClick={() => history.push('/')}>GLENNBAROSEN</div>
                <div css={navLinks}>
                    <div css={buttonStyle} onClick={handleSignInClick}>{props.buttonText}</div>
                </div>
            </div>

        )
    }
}
export default Navbar