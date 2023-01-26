import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function UserSignUpPage({setUser}) {
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
      }})
  }

  return (
    <div>
      <h1 className='page_title'>Sign Up</h1>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <label className='form-label'>Username:
            <input className='form-control' name='username' onChange={handleChange}></input>
            </label>
           </div>
          <div className='row'>  
            <label className='form-label'>Password:
            <input className='form-control' name='password' type='password' onChange={handleChange}></input>
            </label>
          </div>
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