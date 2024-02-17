import React from 'react';
import lists from "../lists.json"

function Overview() {
  return (
  <div className='overview'>
    <div className="overviewDescription">
      <p>sabatms / READMe.md</p>
      <h1>Hi I'm Saba, Sabatms</h1>

      <div className="line" />

      <h2>A Front-end Developer</h2>
      <p>
        I love coding with HTML, CSS, JavaScript , React , Redux ,Sass(css) ...and 
        other about front-end &#128187;
      </p>
      <p>Thanks for Watching my GitHub Page &#128079;</p>
    </div>

    <div className="repositories">
      <div className="repositoriesTitle">
        <h2>Popular repositories </h2>
      </div>

      <div className="repositoriesContainer">
         {lists.map((repo, i)=>(
            <div className="repositoriesBox" key={i}>
            <div className="repositoriesTop">
              <h3>{repo.repo}</h3>
              <p>{repo.status}</p>
            </div>
            <div className="repositoriesBottom">
              <p>{repo.stack}</p>
            </div>
          </div>
         ))}
      </div>
    </div>
  </div>
  );
}

export default Overview