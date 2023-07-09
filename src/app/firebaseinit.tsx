"use client";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

const config = {
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_APP_ID,
  // measurementId: process.env.MESS_ID,
  apiKey: "AIzaSyAnoJj65Fbi3XrLhbeRmhesffAKEKtV6Gw",
  authDomain: "insta-downloads.firebaseapp.com",
  projectId: "insta-downloads",
  storageBucket: "insta-downloads.appspot.com",
  messagingSenderId: "29415668957",
  appId: "1:29415668957:web:0920a36cf04888aae5af34",
  measurementId: "G-MTBPGT28HF"
};

// apiKey: "AIzaSyAnoJj65Fbi3XrLhbeRmhesffAKEKtV6Gw",
// authDomain: "insta-downloads.firebaseapp.com",
// projectId: "insta-downloads",
// storageBucket: "insta-downloads.appspot.com",
// messagingSenderId: "29415668957",
// appId: "1:29415668957:web:0920a36cf04888aae5af34",
// measurementId: "G-MTBPGT28HF"

function FirebaseInit() {
  useEffect(() => {
    const app = initializeApp(config);

    getAnalytics(app);
  }, []);

  return null;
}

export default FirebaseInit;
