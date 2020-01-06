import React from "react";
import './Nav.scss';
import cart from '../../images/Cart.svg';

const Nav = () => {
  return (
    <nav>
      <div onClick={menuShow} id="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <h3>RECORDS</h3>

      <ul className="nav-links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">CATEGORIES</a>
        </li>
        <li>
          <a href="#">RECOMENDED</a>
        </li>
        <li>
          <a href="#">SALE</a>
        </li>
      </ul>

      <div className='cart'>
        <img src={ cart } />
      </div>

    </nav>
  );
};
  
const menuShow = () => {
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector("#burger");

  nav.classList.toggle("nav-active");

  burger.classList.toggle("cross");
};

export default Nav;
