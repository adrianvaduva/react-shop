import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebase';

firebase.initializeApp(firebaseConfig);

export function signIn(provider) {
    return firebase.auth().signInWithPopup(provider);
}

export function signOut() {
    return firebase.auth().signOut();
}