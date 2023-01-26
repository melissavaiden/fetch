import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function UserSignUpPage({setUser}) {
  const [error, setError] = useState()
  const [newUser, setNewUser] = useState({
    username:"",
    password:""
  })
  const navigate = useNavigate();



  function handleChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": newUser.username,
        "password": newUser.password
      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          fetch('/login', {
            method: 'POST', 
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "username" : newUser.username,
              "password" : newUser.password
            }),
          })
          .then((r) => {
            if (r.ok) {
              navigate('/homepage')
            }
          })
        })
      } else {
        r.json().then((error) => setError(error.error))
      }
    })
  }

  return (
    <div>
      <h1 className='page_title'>Sign Up</h1>
      <div className='container'>
        <div>{error}</div>
        <form onSubmit={handleSubmit}>
          <div className='form-floating'>
            <input className='form-control' name='username' placeholder='username' onChange={handleChange}></input>
            <label className='form-label'>Username</label>
           </div>
           <br></br>
          <div className='form-floating'> 
            <input className='form-control' name='password' type='password' placeholder='password' onChange={handleChange}></input>
            <label className='form-label'>Password</label>
          </div>
          <br></br>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        <div className='container'>
          <div className='sign_in_container'>
            <div>Already have an account?</div>
            <NavLink to='/'>Login</NavLink>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default UserSignUpPage