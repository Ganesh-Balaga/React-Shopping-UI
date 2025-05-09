import React from "react";

const Header = () => {
  return (
    <div className="headerSection">
      <div className="left">
        <div className="title">
          <h2>Shopping Cart</h2>
        </div>
      </div>
      <div className="center">
        <ul>
          <li className="li">Women</li>
          <li className="li">Men</li>
          <li className="li">Children</li>
          <li className="li">Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="search..."></input>
      </div>
      <div className="right">
        <div className="signin">Signin / Signup</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
};

export default Header;
