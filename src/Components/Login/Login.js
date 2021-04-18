import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button, Container } from 'react-bootstrap';

const Login = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      } else {
        firebase.app(); // if already initialized, use that one
      }

      
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

      
  
    const history = useHistory();
    const location = useLocation();
  
    const { from } = location.state || { from: { pathname: "/" } };

    const setUserToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        sessionStorage.setItem('token', idToken)
      }).catch(function(error) {
        // Handle error
      });
    }
  
    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
  
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
  
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          const { displayName, email } = result.user;
          const userInfo = {
              ...loggedInUser,
            userName: displayName,
            userEmail: email
          };
          
          setUserToken();
          setLoggedInUser(userInfo);
          
          history.replace(from);
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    };

    return (
        <div class="text-center py-5 my-5">
           <Container >
                <h1 class="my-3">Welcome to Authentication page</h1>
                <div class="my-5">
                    <Button  onClick={handleGoogleSignIn}>Google Sign in</Button>
                </div>
                
            </Container>
        </div>
    );
};

export default Login;