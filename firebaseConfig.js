// firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Update the path

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://applicationofloan-a33d2-default-rtdb.firebaseio.com', 
});

const db = admin.database(); // Get a reference to the database
module.exports = db; // Export the database reference
