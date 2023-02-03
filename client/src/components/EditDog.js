import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function EditDog({editDog}) {
  const [updateDog, setUpdateDog] = useState([])

  useEffect(() => {
    fetch(`/dogs/${editDog.id}`)
    .then((r) => r.json())
    .then((dog) => setUpdateDog(dog))
  },[])


  function handleChange(e) {
    console.log(e.target.value)
  }

  console.log(updateDog)
  return (
    <div>
      <NavBar />
      <form>
        <h1>Edit Dog</h1>
        <div className='form-group'>
          <label className='form-label'>Name</label>
          <input className='form-control' placeholder={editDog.name} name='name' onChange={handleChange}></input>
        </div>
        <br></br>
        <div className='form-group'>
          <label className='form-label'>Picture URL</label>
          <input className='form-control' placeholder={editDog.picture_url} name='picture_url' onChange={handleChange}></input>
        </div>
        <br></br>
        <div className='form-group'>
          <label>Age</label>
          <input className='form-control' type='number' placeholder={editDog.age} name='age' onChange={handleChange}></input>
        </div>
      </form>
    </div>
  )
}

export default EditDog