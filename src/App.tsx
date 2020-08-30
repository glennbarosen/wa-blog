import React, { useState, useEffect } from 'react';
import firebase from './firebase'
import { Posts } from './Types';
import Header from './components/Header';

const dateToDB = Date.now()

// firebase.firestore().collection('posts').add({
//   title: 'Test',
//   date: dateToDB,
//   content: 'This is a test post!'
// })

// const usePosts = () => {
//   const [posts, setPosts] = useState([] as Posts)

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection('posts')
//       .onSnapshot((snapshot) => {
//         const newPosts = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setPosts(newPosts)
//       })
//   }, [])
//   return posts
// }

const App = () => {
  // const posts = usePosts()
  return (
    <Header />
    // <div className="App">
    //   <ul>
    //     {posts.map((post) => (
    //       <li key={post.id}>
    //         {post.title}<br />
    //         {new Date(post.date).toLocaleDateString()}<br />
    //         {post.content}<br />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  )
}

export default App;
