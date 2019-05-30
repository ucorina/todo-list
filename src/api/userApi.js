import firebase from "../firebase";

export function login() {
  return new Promise((resolve, reject) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        resolve({
          token,
          user: {
            email: user.email,
            displayName: user.displayName,
            uid: user.uid
          }
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        reject({
          errorCode,
          errorMessage,
          email,
          credential
        });
      });
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        resolve();
      })
      .catch(function(error) {
        // An error happened.
        reject(error);
      });
  });
}
