const firebase = require('firebase');

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.BUCKET,
  messagingSenderId: process.env.MESSAGE_ID,
};
firebase.initializeApp(config);
const db = firebase.firestore();

module.exports = db;