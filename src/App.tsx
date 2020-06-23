import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Switch>
          {/* <Route
              exact
              path="/"
              render={(props) => <NewQuestion {...props}></NewQuestion>}
            ></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
