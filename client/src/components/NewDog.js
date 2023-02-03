import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

function NewDog({user, handleNewDog}) {
    const navigate = useNavigate();
    const [tags, setTags] = useState([])
    const [newDogTags, setNewDogTags] = useState([])
    const [errors, setErrors] = useState()
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
            <button className='btn btn-outline-dark' data-bs-toggle="button" value={tag.id} key={tag.id} id={tag.id} onClick={handleTagClick}>{tag.title}</button>
        )
    })

    function handleDogChange(e) {
        setNewDog({
            ...newDog,
            [e.target.name] : e.target.value
        })
    }


    function handleTagClick() {
        let selectedTags = document.getElementsByClassName('active')
        setNewDogTags(selectedTags)
    }

    function addTagsToDog(e) {
        e.preventDefault();
        let tagIds = []
        for (let i = 0; i < newDogTags.length; i++) {
            tagIds.push(newDogTags[i].id)
        }
        setNewDogTags(tagIds)
        alert('Tags Added!')
    }

    function formSubmit(e) {
        console.log(newDogTags)
        e.preventDefault();
        fetch('/dogs', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "user_id": newDog.user_id,
              "picture_url": newDog.picture_url,
              "name": newDog.name,
              "age": newDog.age,
              "tags": newDogTags
            }),
          })
        .then((r) => {
            if (r.ok) {
                r.json().then((dog) => {
                    console.log(dog)
                })
            } else {
                r.json().then((error) => setErrors(error.error))
            }
        })
        // navigate('/homepage')
    }

  return (
    <div>
        <NavBar />
        <form onSubmit={formSubmit}>
        <br></br>
        <div>{errors}</div>
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
        <button onClick={addTagsToDog}>Add Tags</button>
        <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewDog