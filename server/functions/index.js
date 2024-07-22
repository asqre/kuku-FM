import functions from "firebase-functions";
import app from "./server.js"; 

export const firebaseApp = functions.https.onRequest(app);