import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {

  function handleLogOut() {
    fetch('http://localhost:4000/logout', {
      method: 'DELETE'
    })
  }

  return (
    <div className='navbar navbar-expand'>
      <div className='container'>
        <NavLink>Favorites</NavLink>
        <NavLink>Add a New Pup!</NavLink>
        <NavLink onClick={handleLogOut}>Log Out</NavLink>
      </div>
    </div>
  )
}

export default NavBar;