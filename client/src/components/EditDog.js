import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function EditDog({editDog}) {
  const [updateDog, setUpdateDog] = useState([])
  const [tags, setTags] = useState([])
  const [editTags, setEditTags] = useState([])

  useEffect(() => {
    fetch(`/dogs/${editDog.id}`)
    .then((r) => r.json())
    .then((dog) => console.log(dog))
  },[])

  useEffect(() => {
    fetch("/tags")
    .then((r) => r.json())
    .then((tag) => setTags(tag))
  },[])


  let tagButtons = tags.map((tag) => {
    return(
        <button className='btn btn-outline-dark' data-bs-toggle="button" value={tag.id} key={tag.id} id={tag.id} onClick={handleTagClick}>{tag.title}</button>
    )
  })


  function handleChange(e) {
    setUpdateDog({
      ...updateDog,
      [e.target.name] : e.target.value
    })
  }

  console.log(updateDog)

  function handleTagClick() {
    let selectedTags = document.getElementsByClassName('active')
    setEditTags(selectedTags)
}

function addTagsToDog(e) {
  e.preventDefault();
  let tagIds = []
  for (let i = 0; i < editTags.length; i++) {
      tagIds.push(editTags[i].id)
  }
  setEditTags(tagIds)
  alert('Tags Added!')
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
        <div>What are some of your dog's favorite things?</div>
        {tagButtons}
        <br></br>
        <button onClick={addTagsToDog}>Add Tags</button>
        <br></br>
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EditDog