import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Components/nav/Nav.scss";
import menuShow from "./Components/nav/Nav";
import cart from "./images/Cart.svg";

import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import Recomended from "./Components/Recomended/Recomended";
import Sale from "./Components/Sale/Sale";
import Product from "./Components/Product/Product";
import Cart from './Components/Cart/Cart';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <Router>
      <nav>
        <div onClick={menuShow} id="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <Link to="/">
          <h3 className='record-rubrik'>RECORDS</h3>
        </Link>

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
          <li>
            <Link to="/cart">cart</Link>
          </li>
        </ul>

        <Link to="/cart" className="cart">
          <img alt="Cart" src={cart}  />
        </Link>
        
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
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        {/* <Route path="*">
          <NoMatch />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

const goToCart = () => {

}

// const Child = () => {
//   let { id } = useParams();

//   return (
//     <Product id={id} />
//   );  

// }

// function NoMatch() {

//   return (
//     <div>
//       <h3>
//         No match for URL
//       </h3>
//     </div>
//   );
// }


export default App;
