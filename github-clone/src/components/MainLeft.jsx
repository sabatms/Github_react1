import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import lists from "../lists.json"
import { Link } from "react-router-dom";

function MainLeft() {
  return <div className="mainLeftContainer">
    <div className="mainLeft">
        <div className="mainLeftName">
        <img 
    src="https://avatars.githubusercontent.com/u/110444941?v=4"
     alt=""
      />
      <h2>sabatms</h2>
      <IoMdArrowDropdown />
     </div>

     <div className="line" />

     <div className="recentRepo">
        <div className="recentRepos">
            <h2>Recent Repositories</h2>
            <button>New</button>
        </div>
        <div className="inputBox">
            <input type="text" placeholder="Find a repositores..." />
        </div>
      </div>

      <div className="mainLeftLists">
        {lists.map((item, idx) =>(
            <div className="item" key={idx}>
        <img 
        src="https://avatars.githubusercontent.com/u/110444941?v=4"
        alt="" 
        />
        <div>
            <h2>{`${item.name}/${item.repo}`}</h2>
        </div>
            </div>
        ))}
       <Link to="./profile">Show more</Link>
      </div>

      <div className="line"/>

      <div className="recentRepo">
        <div className="recentRepos">
            <h2>Recent Activities</h2>
        </div>
        <p>Thanks for watching</p>
      </div>

      <div className="line" />

      <div className="recentRepo">
        <div className="recentRepos">
            <h2>Your teams</h2>
        </div>
        <div className="inputBoxTwo">
            <input type="text" placeholder="Find a team.."/>
        </div>
      </div>
     </div>
    </div>
}

export default MainLeft