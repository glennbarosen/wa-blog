// eslint-disable-next-line
import React, { Fragment, useState, useEffect } from 'react';
import Home from './views/Home';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './views/Auth'
import Navbar from './components/Navbar'
import firebase from './firebase'

const App = () => {

  const [user, setUser] = useState(null)
  useEffect(() => {
    const authMonitor = firebase
      .auth()
      .onAuthStateChanged((user: any) => {
        setUser(user)
      })
    return authMonitor

  }, [])

  const signOutUser = () => {
    firebase.auth().signOut().then(() => {
      console.log('user signed out')
    }).catch(() => {
      console.log('error while signing out')
    })
    setUser(null)
  }
  const getEmail = () => {
    if (user !== null)
      return firebase.auth().currentUser.email
  }

  return (
    <Fragment>
      <Router>
        <Navbar user={user} signOutUser={signOutUser} getEmail={getEmail} />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Auth'>
            <SignIn user={user} />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;