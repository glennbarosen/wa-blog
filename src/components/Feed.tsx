import React from 'react'
import Post from './Post'
import { feedContainer } from '../Styles'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Feed = () => {
    return (
        <div css={feedContainer}>
            <Post />
        </div>
    )
}
export default Feed