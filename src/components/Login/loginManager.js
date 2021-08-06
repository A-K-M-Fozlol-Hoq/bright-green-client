import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
// firebase.initializeApp(firebaseConfig);
export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};
export const createUserWithEmailAndPassword = (
  name,
  email,
  password,
) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email } = res.user;
      console.log(res.user);
      const newUserInfo = {
        isSignedIn: true,
        // name: name,
        name: displayName,
        email: email,
        success: true,
        error: "",
      };
      saveToDatabase(name,email);
      return newUserInfo;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const newUserInfo = {};
      newUserInfo.error = errorMessage;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const { email, displayName } = res.user;
      const newUserInfo = {
        isSignedIn: true,
        name: displayName,
        email: email,
        success: true,
        error: "",
      };
      return newUserInfo;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const newUserInfo = {};
      newUserInfo.error = errorMessage;
      newUserInfo.success = false;
      return newUserInfo;
    });
};



// Store to database ======================================== mongoDB database
const saveToDatabase = (name, email) => {
  fetch("https://ancient-bayou-79993.herokuapp.com/addUser", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      role: 'user',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};
