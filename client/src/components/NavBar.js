import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar({setUser, user}) {
  const navigate = useNavigate();


  function handleLogOut() {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then((r) => {
      if (r.ok) {
        setUser({})
        navigate('/')
      }
    })
  }
// 

  return (
    <div className='navbar navbar-expand'>
      <div className='container'>
        <NavLink to='/homepage'>Home</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/newdog'>Add a New Pup!</NavLink>
        <NavLink to='/mydogs' >My Pupperinos</NavLink>
        <NavLink to='/'onClick={handleLogOut}>Log Out</NavLink>
      </div>
    </div>
  )
}

export default NavBar;