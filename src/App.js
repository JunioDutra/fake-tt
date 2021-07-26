import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';


const provider = new firebase.auth.GoogleAuthProvider();

function App() {
  const [logado, setLogado] = useState(true)

  if (logado) {
    const user = firebase.auth().currentUser;
    return (<span>tu ja ta logado animal!</span>);
  } else {
    return (
      <div className="App">
        <button onClick={()=>{
          firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
        
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        
            alert('logado');
        
          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        
            alert('não logado');
          });
        }}>login</button>
      </div>
    );
  }
}

export default App;
