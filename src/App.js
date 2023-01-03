import React from "react";
import "./App.css";

import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProject from "./components/Project/SingleProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/project/:slug" exact element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;
