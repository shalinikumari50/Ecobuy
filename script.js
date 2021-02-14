import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";  

// Required for side-effects
require("firebase/firestore");

// Get a reference to the database service
var database = firebase.database();

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "ecobuy-d4f8e.firebaseapp.com",
  projectId: "ecobuy-d4f8e",
  storageBucket: "ecobuy-d4f8e.appspot.com",
  messagingSenderId: "50033180824",
  appId: "1:50033180824:web:c251b3aa5d66577391d0ed"
};

var config = {
    apiKey: "API_KEY",
    authDomain: "ecobuy-d4f8e.firebaseapp.com",
    databaseURL: "https://ecobuy-d4f8e-default-rtdb.firebaseio.com/",
    storageBucket: "ecobuy-d4f8e.appspot.com"
  };
  firebase.initializeApp(config);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var email = document.getElementById("exampleInputEmail1").value = "abc@gmail.com";

var password = document.getElementById("exampleInputPassword1").value = "123456";

//add new user
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

//existing user
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

//add data
database.collection("users").add({
    name: "Ada Lovelace",
    email: "abc@gmail.com",
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

//read data 
database.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});