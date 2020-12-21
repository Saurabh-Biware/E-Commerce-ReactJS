import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
        apiKey: "AIzaSyA9SVVLWc9MU9nAbdDdRTAVnl1nG0S0cHk",
        authDomain: "exp-db-e5468.firebaseapp.com",
        databaseURL: "https://exp-db-e5468.firebaseio.com",
        projectId: "exp-db-e5468",
        storageBucket: "exp-db-e5468.appspot.com",
        messagingSenderId: "482617828819",
        appId: "1:482617828819:web:6400a700e08355b8c67b26",
        measurementId: "G-6N5PMH4Y4Q"
      };

      firebase.initializeApp(config);

      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };
      

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

