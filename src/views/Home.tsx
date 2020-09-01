import React from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'
import { appContainer } from '../Styles'
import * as StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

const Home = () => {

    return (
        <div css={appContainer}>
            <Header />
            <Feed />
        </div>

    )
}

export default Home;