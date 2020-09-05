import React from 'react'
import firebase from '../firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Redirect } from 'react-router-dom'


interface IAuthProps {
    user: string
}
const SignIn = (props: IAuthProps) => {

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => {
                return false
            }
        }
    }




    if (props.user !== null) {
        return (
            <Redirect to='/' />

        )
    } else {
        return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    }

}

export default SignIn;