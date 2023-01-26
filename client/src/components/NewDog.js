import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function NewDog() {
    const [tags, setTags] = useState([])
    const [newDogTags, setNewDogTags] = useState([])
    const [newDog, setNewDog] = useState({
        name: "",
        age: "",
        picture_url:"",
    })

    useEffect(() => {
        fetch("/tags")
        .then((r) => r.json())
        .then((tag) => setTags(tag))
    },[])


    let tagButtons = tags.map((tag) => {
        return(
            <button className='btn btn-outline-dark' data-bs-toggle="button" onClick={addTagsToNewDog(tag.id)}key={tag.id} id={tag.id}>{tag.title}</button>
        )
    })

    function handleDogChange(e) {
        console.log(e.target.value)
    }

    function addTagsToNewDog (newTagId) {
        setNewDogTags({...newDogTags, newTagId})
        console.log(newDogTags)
    }


  return (
    <div>
        <NavBar />
        <div className='row'>
            <label className='form-label'>Name:
            <input className='form-control' onChange={handleDogChange} name='name'></input>
            </label>
        </div>
        <div className='row'>
            <label className='form-label'>Picture:
            <input className='form-control' type='file' onChange={handleDogChange} name='picture_url'></input>
            </label>
        </div>
        <div className='row'>
            <label className='form-label'>Age:
            <input className='form-control' type='number' onChange={handleDogChange} name='age'></input>
            </label>
        </div>
        <div>What are some of your dog's favorite things?</div>
        {tagButtons}

    </div>
  )
}

export default NewDog