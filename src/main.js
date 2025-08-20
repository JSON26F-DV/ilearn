import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:uno.css'
import './style.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBju6mqMsZ7gg7JNZiGPX12MJiYuUOKHsI',
  authDomain: 'educ-ilearn.firebaseapp.com',
  projectId: 'educ-ilearn',
  storageBucket: 'educ-ilearn.firebasestorage.app',
  messagingSenderId: '452064070144',
  appId: '1:452064070144:web:70e5f656ed624d201b26e5',
  measurementId: 'G-8ZBGVYLV6C',
}

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
