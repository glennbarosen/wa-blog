// eslint-disable-next-line
import React, { useState } from 'react'
import { adminContainer, buttonStyle } from '../Styles'
import firebase from '../firebase'

/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core'

const dateToDB = Date.now()

const Admin = () => {


    const [newPost, setNewPost] = useState({
        title: '',
        hours: '',
        content: ''
    }
    );
    const handleChange = (e: { target: { value: any; name: any; }; }) => {
        const value = e.target.value;
        setNewPost({
            ...newPost,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        firebase.firestore().collection('posts').add({
            title: newPost.title,
            hours: parseInt(newPost.hours),
            content: newPost.content,
            date: dateToDB
        })
        setNewPost({
            title: '',
            hours: '',
            content: ''
        });
    }

    return (
        <div css={adminContainer}>
            <form onSubmit={handleSubmit}>
                <label>Tittel: </label><br />
                <input
                    name='title'
                    type='text'
                    value={newPost.title}
                    autoComplete='off'
                    onChange={handleChange} />
                <br />

                <label>Timer: </label><br />
                <input
                    name='hours'
                    type='text'
                    value={newPost.hours}
                    autoComplete='off'
                    onChange={handleChange} />
                <br />

                <label>Innhold: </label><br />
                <textarea
                    name='content'
                    value={newPost.content}
                    autoComplete='off'
                    onChange={handleChange} />
                <br />

                <button css={buttonStyle}>post</button>
            </form>
        </div>
    )
}

export default Admin