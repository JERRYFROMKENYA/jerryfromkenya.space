// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAELIZYoWlxmwnEjKomjwXdNUbfSIp6qxw",
  authDomain: "jerryfromkenya-space-dev.firebaseapp.com",
  projectId: "jerryfromkenya-space-dev",
  storageBucket: "jerryfromkenya-space-dev.appspot.com",
  messagingSenderId: "397737081244",
  appId: "1:397737081244:web:11efd467013fc2842c3059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore service
const db = getFirestore()

//collection reference
const colRef = collection(db, 'carddata')

//get collection data

getDocs(colRef)
    .then((snapshot) => {
        let carddata =[]
        snapshot.docs.forEach((doc) => {
            carddata.push({ ...doc.data(), id: doc.id })

        })
        console.log(carddata)
        
    })
    .catch(err => {
        console.log(err.message)
    })

    //adding documents
    const addCardForm = document.querySelector('add')
    addCardForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    //delete documents
    const deleteCardForm = document.querySelector('delete')
    deleteCardForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })


  

