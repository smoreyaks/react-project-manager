import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCJYQcdrQb7S3snukrZAMwM_vAqPqGc4MU",
    authDomain: "we-build-58488.firebaseapp.com",
    projectId: "we-build-58488",
    storageBucket: "we-build-58488.appspot.com",
    messagingSenderId: "1020057690906",
    appId: "1:1020057690906:web:a2ccf4684a742111a402a3"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp  }