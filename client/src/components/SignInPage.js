import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SignInPage() {
  return (
    <div>
        <h1>Welcome</h1>
        <h3>Username</h3>
        <input type='text'></input>
        <br></br>
        <h3>Password</h3>
        <input type='text'></input>
        <br></br>
        <br></br>
        <button>Sign In</button>
        <br></br>
        <NavLink>Sign Up</NavLink>
    </div>
  )
}
