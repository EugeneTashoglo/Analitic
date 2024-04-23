//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import SignIn from './SignIn.vue';
import LogIn from './LogIn.vue';

createApp(App).mount('#app')
createApp(SignIn).mount('#signIn')
createApp(LogIn).mount('#logIn')