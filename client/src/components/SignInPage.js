import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SignInPage() {

  function handleSubmit() {

  }
  return (
    <div className='container'>
      <form>
        <div className="form-floating">
          <input type='username' className='form-control' placeholder='username'></input>
          <label>Username</label>
          <br></br>
        </div>
        <div className='form-floating'>
          <input type='text' className='form-control' placeholder='password'></input>
          <label className='form-label'>Password</label>
        </div>
      </form>

      <br></br>
      <br></br>
      <button className='btn btn-primary'>Sign In</button>
      <br></br>
      <div className='container'>
        <label>Don't have an account?</label>
        <NavLink to="/user_sign_up">Sign Up</NavLink>
      </div>
    </div>
  )
}
