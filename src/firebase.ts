import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAnwNGWQtNYapOIKdnKycPQW9UbBbqVVzA',
    authDomain: 'firestore-blog-2cea2.firebaseapp.com',
    databaseURL: 'https://firestore-blog-2cea2.firebaseio.com',
    projectId: 'firestore-blog-2cea2',
    storageBucket: 'firestore-blog-2cea2.appspot.com',
    messagingSenderId: '9465825417',
    appId: '1:9465825417:web:2d88fabb4dd12a82089e58'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase;