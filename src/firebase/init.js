import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var config = {
  apiKey: 'AIzaSyDSWqG6txn_w9-fSflD9LBB_8nMU-Ev0CQ',
  authDomain: 'ahon-app.firebaseapp.com',
  databaseURL: 'https://ahon-app.firebaseio.com',
  projectId: 'ahon-app',
  storageBucket: '',
  messagingSenderId: '880830065198',
  appId: '1:880830065198:web:db2aabc8e1ed91b1'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
