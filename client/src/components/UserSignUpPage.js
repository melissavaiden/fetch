import React from 'react'

function UserSignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <label>Username:
        <input></input>
      </label>
      <br></br>
      <label>Password:
        <input></input>
      </label>
      <br></br>
      <label>Name:
        <input></input>
      </label>
      <br></br>
      <label>Picture:
        <input></input>
      </label>
      <br></br>
      <label>Age:
        <input></input>
      </label>
      <br></br>
      <label>Favs:
        <input></input>
      </label>
      <br></br>
      <label>Hates:
        <input></input>
      </label>
      <br></br>
      <label>Does Your Owner Have an Account?
        <label>Yes 
        <input type='checkbox' value='yes'></input>
        </label>
        <label>No 
        <input type='checkbox' value='no'></input>
        </label>
      </label>
      <br></br>
      <button>Submit</button>

    </div>
  )
}

export default UserSignUpPage