import React from 'react';

const NavBar = ({ user, handleLogout }) => {
  return(
    <>
      {user ?
      <nav>
        <div className="nav-wrapper">
          <a className=" left" href="/"><img src="https://fontmeme.com/permalink/200705/e2371cf438042048aa22fb9341eadbba.png" height='66' alt="netflix-font" border="0"/></a>
          <ul id="nav-mobile" className="right">
            <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
            <li><a className="nav-link-a" href="/albums">All Albums</a></li>
            <li><a className="nav-link-b" href="/albums/add">Add an Album</a></li>
            <li><a className="nav-link-a" href="/songs">All Songs</a></li>
            <li><a className="nav-link-b" href="/songs/add">Add a Song</a></li>
            <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
          </ul>
        </div>
      </nav>
    :
      <nav>
        <div className="nav-wrapper">
          <a className=" left" href="/"><img src="https://fontmeme.com/permalink/200705/e2371cf438042048aa22fb9341eadbba.png" height='66' alt="netflix-font" border="0"/></a>
          <ul id="nav-mobile" className="right">
            <li><a className="nav-link" href="/albums">All Albums</a></li>
            <li><a className="nav-link" href="/songs">All Songs</a></li>
            <li><a href="/login" className="nav-link">Log In</a></li>
            <li><a href="/signup" className="nav-link">Sign Up</a></li>
          </ul>
        </div>
      </nav>
      }
    </>
  )
}

export default NavBar;