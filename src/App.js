import React from "react";
import NavBar from "./components/layout/NavBar";
import GithubState from "./components/context/github/githubState";
import AlertState from "./components/context/alert/AlertState";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/users/User";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
