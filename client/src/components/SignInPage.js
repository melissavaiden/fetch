import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'

export default function SignInPage() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  function handleSubmit() {
    fetch('http://localhost:4000/login', {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username" : username,
        "password" : password
      })
    })
    .then((r) => r.json())
    .then((newUser) => console.log(newUser))

  }

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
        <NavLink to='/homepage'className='btn btn-primary'>Login</NavLink>
      </form>

      <br></br>
      <div className='container'>
        <label>Don't have an account?</label>
        <NavLink to="/user_sign_up">Sign Up</NavLink>
      </div>
    </div>
  )
}
