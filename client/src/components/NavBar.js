import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

function NavBar({setUser}) {
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
        <Link to='/homepage'>Home</Link>
        <Link to='/newdog'>Add a New Pup!</Link>
        <Link to='/mydogs' >My Pupperinos</Link>
        <Link to='/'onClick={handleLogOut}>Log Out</Link>
      </div>
    </div>
  )
}

export default NavBar;