import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import  About from "./component/About";
import  Svg from "./component/Svg";
import  FauxDom from "./component/FauxDom";
import  Simple from "./component/Simple";

function App() {
  return (
    <Router>
      <div className="body">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/svg">Svg</Link>
            </li>
            <li>
              <Link to="/faux-dom">Faux Dom</Link>
            </li>
            <li>
              <Link to="/simple">Simple</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/svg">
            <Svg />
          </Route>
          <Route path="/faux-dom">
            <FauxDom />
          </Route>
          <Route path="/simple">
            <Simple />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
