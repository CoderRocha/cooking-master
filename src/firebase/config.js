import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDo0CoOEN_ltidYabrNKLj1WngJlRf5BCc",
    authDomain: "cooking-master-website.firebaseapp.com",
    projectId: "cooking-master-website",
    storageBucket: "cooking-master-website.appspot.com",
    messagingSenderId: "960716251101",
    appId: "1:960716251101:web:ce3cb12b40b0b6476b6034"
}

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore()

export { projectFirestore }