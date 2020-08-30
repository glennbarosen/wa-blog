// eslint-disable-next-line
import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import { appContainer } from './Styles';

/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'

const App = () => {
  return (
    <div css={appContainer}>
      <Header />
      <Feed />
    </div>
  )
}

export default App;
