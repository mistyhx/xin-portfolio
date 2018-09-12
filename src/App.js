import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div className="App">
              <Navbar />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  transitionEnterTimeout={800}
                  transitionExitTimeout={800}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Project} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
