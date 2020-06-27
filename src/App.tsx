import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Jogs from "./components/Jogs/Jogs";
import LetIn from "./components/LetIn/LetIn";
import Info from "./components/Info/Info";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Jogs></Jogs>}></Route>
          <Route path="/let-in" render={() => <LetIn></LetIn>}></Route>
          <Route path="/info" render={() => <Info></Info>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
