import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./pages/header";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Home from "./pages/home";
import SideNavBar from "./pages/sideNavBar";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <Router>
      <div className="app">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Header path={location.pathname} userDetails={location.state} />
              {/* <SideNavBar /> */}
            </div>
          </nav>
          {/* <div className="outerPart">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={Home} />
            </Switch>
          </div> */}
        </div>
        <div className="row">
          <div className="outerPart">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
