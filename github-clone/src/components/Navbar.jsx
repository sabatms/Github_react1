import React, { useState } from "react";
import img1 from "../img/img1.jpeg";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Menu from "./Menu";


function Navbar() {
  const[showMenu, setShowMenu] = useState(false)
  return(
  <nav className="navbar">
<div className="navLeft">
      
      <Link to="/">
      <img src={img1} alt="" />
      </Link>

    <div>
      <input type="text" placeholder="Search or jump to" />
    </div>
</div>

<div className="navCenter">
   <h2>Pulls</h2>
   <h2>Issues</h2>
   <h2>Marketplace</h2>
   <h2>Explore</h2>
</div>

<div className="navRight">
    <FiBell />
    <div className="navRightIcons">
        <FiPlus />
        <IoMdArrowDropdown />
    </div>
    <div className="navRightIcons" onClick={() => setShowMenu(!showMenu)}>
    <img 
    src="https://avatars.githubusercontent.com/u/110444941?v=4"
     alt="" />
     <IoMdArrowDropdown />
    </div>
   </div>
   {showMenu && <Menu/>}
  </nav>
  );
}

export default Navbar;