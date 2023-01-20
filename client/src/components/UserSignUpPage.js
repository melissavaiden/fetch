import React from 'react'

function UserSignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <div className='container'>
        <div className='row'>
        <label className='form-label'>Username:
        <input className='form-control'></input>
        </label>
      </div>
      <div className='row'>  
        <label className='form-label'>Password:
        <input className='form-control'></input>
         </label>
      </div>
      <div className='row'>
        <label className='form-label'>Name:
        <input className='form-control'></input>
        </label>
      </div>
      <div className='row'>
      <label className='form-label'>Picture:
        <input className='form-control'></input>
      </label>
      </div>
      <div className='row'>
      <label className='form-label'>Age:
        <input className='form-control'></input>
      </label>
      </div>
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
    </div>
  )
}

export default UserSignUpPage