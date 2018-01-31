import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBeNiXM0lzfPjZIZErmJyF65oFZm4GHJFo",
    authDomain: "admin-e6ff6.firebaseapp.com",
    databaseURL: "https://admin-e6ff6.firebaseio.com",
    projectId: "admin-e6ff6",
    storageBucket: "admin-e6ff6.appspot.com",
    messagingSenderId: "334304919233"
};
firebase.initializeApp(config);
let db = firebase.database()
export default db