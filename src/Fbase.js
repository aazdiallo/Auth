import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_MSG

  // apiKey: "AIzaSyAcrrNw2zdukePC25atmn19RTlTTwNY_9w",
  // authDomain: "riviera-7267a.firebaseapp.com",
  // databaseURL: "https://riviera-7267a.firebaseio.com",
  // projectId: "riviera-7267a",
  // storageBucket: "riviera-7267a.appspot.com",
  // messagingSenderId: "238547481505"
  });

  export default app;
