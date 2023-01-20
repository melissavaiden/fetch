import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SignInPage() {
  return (
    <div>
        <h3 className='form-label'>Username</h3>
        <input type='text' className='form-control'></input>
        <br></br>
        <h3 className='form-label'>Password</h3>
        <input type='text' className='form-control'></input>
        <br></br>
        <br></br>
        <button>Sign In</button>
        <br></br>
        <NavLink>Sign Up</NavLink>
        <h1>FETCH</h1>

    </div>
  )
}
