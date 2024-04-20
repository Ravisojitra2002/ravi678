// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH6zRe8hwIKeX33YKs_0RxKzEi3Noo1KM",
    authDomain: "hello-data-3eba7.firebaseapp.com",
    projectId: "hello-data-3eba7",
    storageBucket: "hello-data-3eba7.appspot.com",
    messagingSenderId: "283709519216",
    appId: "1:283709519216:web:1ed7a0efb0ad1b932f8bb5",
    databaseUrl: "https://hello-data-3eba7-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);