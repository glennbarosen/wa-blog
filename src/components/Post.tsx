// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import { postContainer, postTitle, postContent, postFooter, gapMaker } from '../Styles'
import { Posts, PostObject } from '../Types'
import firebase from '../firebase'
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'

const usePosts = () => {
    const [posts, setPosts] = useState([] as Posts)

    useEffect(() => {
        firebase
            .firestore()
            .collection('posts')
            .orderBy('date', 'desc')
            .onSnapshot((snapshot) => {
                const newPosts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setPosts(newPosts)
            })
    }, [])
    return posts
}

const Post = () => {
    const posts = usePosts()
    return (
        <div css={gapMaker}>
            {
                posts.map((post: PostObject) => (
                    <div key={post.id} css={postContainer}>
                        <div css={postTitle}>
                            {post.title}
                        </div>
                        <div css={postContent}>
                            {post.content}
                        </div>
                        <div css={postFooter}>
                            <h5>Dato: {new Date(post.date).toLocaleDateString()}</h5>
                            <h5>Timer: {post.hours}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Post