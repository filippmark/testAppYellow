import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Jogs from "./components/Jogs/Jogs";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Jogs></Jogs>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
