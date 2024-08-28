import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInPage from "./LogInPage";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<p>This is the home page</p>} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </Router>
    );
  }
 


}




