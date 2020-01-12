import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Components/nav/Nav.scss";
import menuShow from "./Components/nav/Nav";
import cart from "./images/Cart.svg";

import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories"
import Recomended from "./Components/Recomended/Recomended"
import Sale from "./Components/Sale/Sale"

function App() {
  return (
    <Router>
      <nav>
        <div onClick={menuShow} id="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <h3>RECORDS</h3>

        <ul onClick={menuShow} className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/categories">categories</Link>
          </li>
          <li>
            <Link to="/recomended">recomended</Link>
          </li>
          <li>
            <Link to="/sale">sale</Link>
          </li>
        </ul>

        <div className="cart">
          <img src={cart} />
        </div>
      </nav>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/recomended">
          <Recomended />
        </Route>
        <Route path="/sale">
          <Sale />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}
export default App;
