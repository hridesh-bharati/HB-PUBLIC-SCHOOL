

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AOS from "aos";
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
// ✅ Initialize AOS once globally
AOS.init({
  duration: 1000, // animation duration (ms)
  once: true, // run animation only once
  offset: 100, // offset before trigger
  easing: "ease-in-out", // smooth easing
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
