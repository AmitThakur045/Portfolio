import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ColorProvider from "./context/ColorProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>
);
