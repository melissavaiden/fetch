import React, { useState } from 'react'

function UserSignUpPage() {
  const [newUser, setNewUser] = useState({
    username:"",
    password:""
  })


  function handleChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit() {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "username": newUser.username,
        "password": newUser.password
      })
    })
    .then((r) => r.json())
    .then((user) => console.logg(user))
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <label className='form-label'>Username:
            <input className='form-control' name='username' onChange={handleChange}></input>
            </label>
           </div>
          <div className='row'>  
            <label className='form-label'>Password:
            <input className='form-control' name='password' onChange={handleChange}></input>
            </label>
          </div>
          <button>Submit</button>
        </form>
      </div> 
    </div>
  )
}

export default UserSignUpPage