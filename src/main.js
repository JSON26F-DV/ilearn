import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:uno.css'
import './style.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDC5fV4OIyoGNLaKDWBNNeICUVdKtJgcvA',
  authDomain: 'educ-lms.firebaseapp.com',
  databaseURL: 'https://educ-lms-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'educ-lms',
  storageBucket: 'educ-lms.firebasestorage.app',
  messagingSenderId: '660361883982',
  appId: '1:660361883982:web:8613b960481a6a98fdee1f',
  measurementId: 'G-PFD1P0E90N',
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)

export const db = getFirestore(appFirebase)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
