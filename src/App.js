import React from "react";
import "./App.css";

import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProject from "./components/Project/SingleProject";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amit Thakur - Web Developer</title>
        <meta
          name="description"
          content="Creative Web Developer and Competitive Coder"
        />
        <meta
          name="keywords"
          content={`Portfolio, web developer, Amitthakur045, Beinglame, Amit Thakur, beinglame123, msit, bessalani`}
        />
      </Helmet>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/project/:slug" exact element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;
