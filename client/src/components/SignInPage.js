import React, { useState, useEffect } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

export default function SignInPage({setUser, user}) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();



  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username" : username,
        "password" : password
      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((newUser) => setUser(newUser))
      }
    })
  }

  useEffect(() => {
    if (user.id)
      navigate("/homepage")
    else
      navigate('/')
}, [user])

  

  function handleUserChange(e) {
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input type='username' className='form-control' placeholder='username' onChange={handleUserChange}></input>
          <label>Username</label>
          <br></br>
        </div>
        <div className='form-floating'>
          <input type='text' className='form-control' placeholder='password' onChange={handlePasswordChange}></input>
          <label className='form-label'>Password</label>
        </div>
        <br></br>
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>

      <br></br>
      <div className='container'>
        <label>Don't have an account?</label>
        <NavLink to="/user_sign_up">Sign Up</NavLink>
      </div>
    </div>
  )
}
