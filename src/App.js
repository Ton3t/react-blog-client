import React from "react";
import Router from "./Router";
import "./styles/index.scss";
import Axios from "axios";

Axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="container">
      <Router />
    </div>
  );
}

export default App;
