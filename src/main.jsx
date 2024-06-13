import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { eventos } from "./lib/eventos.js";
import { participantes } from "./lib/participantes.js";

const added = window.localStorage.getItem("added");

if (!added) {
  window.localStorage.setItem("events", JSON.stringify(eventos));
  window.localStorage.setItem("participants", JSON.stringify(participantes));
}

window.localStorage.setItem("added", "yes");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
