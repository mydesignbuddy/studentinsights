import React from "reactn";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

import AppBar from "./components/AppBar";

const App = () => (
  <Router>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

    <AppBar>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard/" component={Dashboard} />
    </AppBar>
  </Router>
);

export default App;
