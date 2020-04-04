import firebase from 'firebase/app'
import 'firebase/auth'

// web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyAm8NP-pzD7PTqZWY5QNc72kLqU2i_ZRLc',
  authDomain: 'reactzzaria-b95d6.firebaseapp.com',
  databaseURL: 'https://reactzzaria-b95d6.firebaseio.com',
  projectId: 'reactzzaria-b95d6',
  storageBucket: 'reactzzaria-b95d6.appspot.com',
  messagingSenderId: '758209727529',
  appId: '1:758209727529:web:2efbb654e1a3a1f2bc2038',
  measurementId: 'G-TLLK9FJH1W'
}

firebase.initializeApp(config)

export default firebase
