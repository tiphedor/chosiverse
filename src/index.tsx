import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqeULYdxmKcEhWr8jls7TEoBHQhqwC8Dk",
  authDomain: "chosiverse.firebaseapp.com",
  projectId: "chosiverse",
  storageBucket: "chosiverse.appspot.com",
  messagingSenderId: "1045267718639",
  appId: "1:1045267718639:web:90f21856c7bfbaa890561a",
  measurementId: "G-6VH4L729T1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
