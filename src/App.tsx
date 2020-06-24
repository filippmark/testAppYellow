import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Jogs from "./components/Jogs/Jogs";
import LetIn from "./components/LetIn/LetIn";

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Jogs></Jogs>}></Route>
          <Route path="/let-in" render={() => <LetIn></LetIn>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
