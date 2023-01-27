import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function NewDog({user}) {
    const [tags, setTags] = useState([])
    const [newDogTags, setNewDogTags] = useState([])
    const [newDog, setNewDog] = useState({
        user_id: user.id,
        picture_url:"",
        name: "",
        age: ""
    })


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

    function handleDogChange(e) {
        setNewDog({
            ...newDog,
            [e.target.name] : e.target.value
        })
    }


    function formSubmit(e) {
        e.preventDefault();
        let selectedTags = document.getElementsByClassName('active')
        let selectedTagsArray = [...selectedTags]
        selectedTagsArray.map((tag) => {
            setNewDogTags(newDogTags => [...newDogTags, tag.id])
        })
        fetch('/dogs', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "user_id": newDog.user_id,
              "picture_url": newDog.picture_url,
              "name": newDog.name,
              "age": newDog.age
            }),
          })
        .then((r) => {
            if (r.ok) {
                r.json().then((dog) => console.log(dog))
            }
        })
    }

  return (
    <div>
        <NavBar />
        <form onSubmit={formSubmit}>
        <br></br>
        <div className='form-floating'>
            <input className='form-control' placeholder='name' onChange={handleDogChange} name='name'></input>
            <label>Name</label>
        </div>
        <br></br>
        <div className='form-floating'>
            <input className='form-control' placeholder='picture' onChange={handleDogChange} name='picture_url'></input>
            <label>Picture URL</label>
        </div>
        <br></br>
        <div className='form-floating'>
            <input className='form-control' type='number' placeholder='age' onChange={handleDogChange} name='age'></input>
            <label>Age</label>
        </div>
        <br></br>
        <div>What are some of your dog's favorite things?</div>
        {tagButtons}
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewDog