import  firebase from 'firebase/app';
import 'firebase/auth';


const app =  firebase.initializeApp({
    apiKey: "AIzaSyD6kAmMsN9ocYxelaC1CdWb9t3yHQA_Qe8",
    authDomain: "authentication-79890.firebaseapp.com",
    databaseURL: "https://authentication-79890.firebaseio.com",
    projectId: "authentication-79890",
    storageBucket: "authentication-79890.appspot.com",
    messagingSenderId: "583413453007",
    appId: "1:583413453007:web:860000f0b98b00865667ba"
  });
  
  
export default app;