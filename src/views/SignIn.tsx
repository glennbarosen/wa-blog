import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import firebase from '../firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Home from './Home'

const SignIn = () => {
    const [signInBtn, setSignInBtn] = useState('Logg inn')
    const [user, setUser] = useState(null)
    useEffect(() => {
        const authMonitor = firebase
            .auth()
            .onAuthStateChanged((user: any) => {
                setUser(user)
            })
        return authMonitor

    }, [])
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

    const signOutUser = () => {
        firebase.auth().signOut().then(() => {
            console.log('user signed out')
        }).catch(() => {
            console.log('error while signing out')
        })
        setUser(null)
    }

    console.log(user)

    if (user !== null) {
        return (
            <Home />
        )
    } else {
        return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    }

}

export default SignIn;