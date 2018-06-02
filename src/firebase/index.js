import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCNk1PljsNsYRgvZ98_KYVqotkRojt24kk',
  authDomain: 'reactbkk3.firebaseapp.com',
  databaseURL: 'https://reactbkk3.firebaseio.com',
  projectId: 'reactbkk3',
  storageBucket: 'reactbkk3.appspot.com',
  messagingSenderId: '666406395956',
}
firebase.initializeApp(config)

// For debugging.
Object.assign(window, { firebase })

export { firebase }
