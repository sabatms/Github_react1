import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { MdRssFeed } from "react-icons/md";
import img1 from "../img/img1.jpeg";
import { Link } from "react-router-dom";

function MainRight() {
  return(
   <div className="mainRight">
    <div className="mainRightContainer">
      <div className="mainRightText">
      <h2>Following</h2>
      <h2>For you</h2>
      </div>

      <div className="lineTwo" />

      <div className="box">
        <h2>
          Welcome...
          <span>This is Github clone with React.js </span> 
        </h2>
        <p>
        Click the button below and enjoy the project I made.
        </p>
        <button className="btn">
          <Link to="/profile"> Github Clone</Link>
        </button>
      </div>

      <div className="boxCenter">
        <div className="boxCenterFirst">
          <IoBulbOutline />
          <p>
          <span>In this project : </span>
          <span> React.js</span> ,
          <span> Sass</span> & <span>react-dom</span> are used.
          </p>
        </div>
        <div className="boxCenterFirst">
          <MdRssFeed />
          <p>I know you like my project... so why don't you follow my github page &#129392;</p>
        </div>
      </div>

      <div className="footer">
        <div className="footerFirst">
          <img src={img1} alt=""/>
          <h4>GitHub Clone</h4>
        </div>
        <div className="footerSecond">
          <div className="footerSecondInside">
            <h4>Blog</h4>
            <h4>About</h4>
            <h4>Shop</h4>
            <h4>GitHub Clone</h4>
            <h4>Pricing</h4>
          </div>
          <div className="footerSecondInside">
            <h4>API</h4>
            <h4>Training</h4>
            <h4>Status</h4>
            <h4>Security</h4>
          </div>
          <div className="footerSecondInside">
            <h4>Terms</h4>
            <h4>Privecy</h4>
            <h4>Docs</h4>
          </div>
        </div>
      </div>
      <div className="lineTwo" />
    </div>
   </div>
  );
}

export default MainRight