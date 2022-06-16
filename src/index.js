import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Account from "./components/Account";
import Stock from "./components/Stock";
import reportWebVitals from "./reportWebVitals";
import Warning from "./components/Warning";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Router>
         <App />
         {/* <Account increase="1" /> */}
         {/* <Stock /> */}
         {/* <Warning /> */}
         {/* <Demo /> */}
      </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
