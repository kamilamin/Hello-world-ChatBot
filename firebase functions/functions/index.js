const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello World function!");
});

exports.helloWorldTwo = functions.https.onRequest((request, response) => {
    response.send("Hello World 2 function!");
});

exports.helloWorldThree = functions.https.onRequest((request, response) => {
    response.send("Hello World 3 function!");
});
