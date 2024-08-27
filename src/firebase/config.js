import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    // Your Firebase Info Here
}

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore()

export { projectFirestore }
