import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <NavLink>Favorites</NavLink>
        <NavLink>Log Out</NavLink>
    </div>
  )
}

export default NavBar;