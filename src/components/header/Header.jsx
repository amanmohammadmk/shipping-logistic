import React, { useState } from 'react';
import './header.css';
import { GiCargoShip } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header">
      <div className="top">
        <div className="top-left">massshipping@mail.com | +12 2564 2569</div>
        <div className="top-right">
          <div className="button-header">Get Quote</div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-left">
          <div className="logo-content">
            <div className="logo"><GiCargoShip style={{ color: "rgba(52, 152, 219)", width: "50px", height: "50px" }} /></div>
            <div className="content">
              <h2 style={{ color: "rgba(52, 152, 219)" }}>MASS</h2>
              <h4>SHIPPING</h4>
              <p>The Best Shipping Experience</p>
            </div>
          </div>
        </div>
        <div className="bottom-right">
          <div className="dropdown-toggle" onClick={toggleDropdown}>
          <TiThMenu style={{color:"white",width:"100px"}} />
          </div>
          <ul className={`bottom-right-ul ${showDropdown ? 'active' : ''}`}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
