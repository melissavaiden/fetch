import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar navbar-expand'>
      <div className='container'>
        <NavLink>Favorites</NavLink>
        <NavLink>Add a New Pup!</NavLink>
        <NavLink>Log Out</NavLink>
      </div>
    </div>
  )
}

export default NavBar;