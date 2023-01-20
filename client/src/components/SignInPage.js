import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SignInPage() {
  return (
    <div className='container'>
        <h3 className='form-label'>Username</h3>
        <input type='text' className='form-control'></input>
        <br></br>
        <h3 className='form-label'>Password</h3>
        <input type='text' className='form-control'></input>
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
