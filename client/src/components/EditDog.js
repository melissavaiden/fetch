import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function EditDog({editDog}) {
  const [updateDog, setUpdateDog] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    fetch(`/dogs/${editDog.id}`)
    .then((r) => r.json())
    .then((dog) => setUpdateDog(dog))
  },[])

  useEffect(() => {
    fetch("/tags")
    .then((r) => r.json())
    .then((tag) => setTags(tag))
  },[])

  let tagButtons = tags.map((tag) => {
    return(
        <button className='btn btn-outline-dark' data-bs-toggle="button" value={tag.id} key={tag.id} id={tag.id}>{tag.title}</button>
    )
  })


  function handleChange(e) {
    console.log(e.target.value)
  }

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
        <br></br>
        {tagButtons}
      </form>
    </div>
  )
}

export default EditDog