import React, {useState} from 'react';
import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEU04orjXfjSccBpakkfkfoA35KO7l6AE",
    authDomain: "wulpersstudio.firebaseapp.com",
    databaseURL: "https://wulpersstudio.firebaseio.com",
    projectId: "wulpersstudio",
    storageBucket: "wulpersstudio.appspot.com",
    messagingSenderId: "1028004040819",
    appId: "1:1028004040819:web:93dcc9dad365dedd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();


function handleSubmit(e, name) {
    e.preventDefault();
    db.collection("wulpers").add({
        email: name,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("se Suscribió correctamente");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert("ocurrió un error");
    });
}

function Form() {
    const [name, setName ] = useState("");
    function handleName(e) {setName(e.target.value);};

    return(
        <form className="cqform" onSubmit={(e) => handleSubmit(e, name)}>
            <input type="email" name="email" id="email" placeholder="e-mail" required onChange={handleName}/>
            <input type="submit" name="submit" id="submit" value="" />
        </form>
    )
}

export default Form;