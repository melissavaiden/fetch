import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SignInPage() {
  return (
    <div className='container'>
      <div className="form-floating">
        <input type='username' className='form-control' placeholder='username'></input>
        <label>Username</label>
        <br></br>
      </div>
      <div className='form-floating'>
        <input type='text' className='form-control' placeholder='password'></input>
        <label className='form-label'>Password</label>
      </div>
      <br></br>
      <br></br>
      <button>Sign In</button>
      <br></br>
      <div className='container'>
        <label>Don't have an account?</label>
        <NavLink to="/user_sign_up">Sign Up</NavLink>
      </div>
    </div>
  )
}
