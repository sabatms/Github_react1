import React from 'react'
import { MdInsertEmoticon } from 'react-icons/md'

function Left() {
  return (
   <div className='left'>
    <div className="image">
    <img 
    src="https://avatars.githubusercontent.com/u/110444941?v=4"
     alt=""
      />
      <div className="emoticonBox">
        <MdInsertEmoticon className='emoticon' />
      </div>
      </div> 

      <div className="leftDetails">
        <h2>Saba Tahmasebii<h6>sabatms</h6></h2>
        <p>&#128156;Front-end Developer</p>
        <br />
        <button>Edit Profile</button>
      </div>
   </div>
  )
}

export default Left