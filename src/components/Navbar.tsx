// eslint-disable-next-line
import React, { Fragment } from 'react'
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
            history.push('/')
        }
    }

    return (
        <div css={navbarContainer}>
            <div css={navbarLogo} onClick={() => history.push('/')}>
                GLENNBAROSEN
            </div>
            <div css={navLinks}>
                {
                    (props.getEmail() === 'glennbarosen@gmail.com' && location.pathname === '/')
                        ? <Fragment>
                            <div css={buttonStyle} onClick={() => { history.push('/Admin') }}>
                                admin
                                </div>
                            <div css={buttonStyle} onClick={handleSignInClick}>{props.buttonText}</div>
                        </Fragment>

                        : (location.pathname !== '/Auth')
                            ? < Fragment >
                                <div css={buttonStyle} onClick={handleSignInClick}>{props.buttonText}</div>
                            </Fragment>

                            : <Fragment></Fragment>
                }
            </div>
        </div>
    )
}
export default Navbar