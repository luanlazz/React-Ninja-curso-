'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCDoDjxHjjboyhjZvd6Vg-X6dgWEbv1qZY',
  authDomain: 'reactflix-cd6e1.firebaseapp.com',
  databaseURL: 'https://reactflix-cd6e1.firebaseio.com',
  projectId: 'reactflix-cd6e1',
  storageBucket: 'reactflix-cd6e1.appspot.com',
  messagingSenderId: '144115994732',
  appId: '1:144115994732:web:527fa14eb6ec401db20849',
  measurementId: 'G-DDTPHCTY3Z'
})

const db = firebase.database()

export { db }
