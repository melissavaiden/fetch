import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

function MyPups({userDogs, handleDeleteDog, updateDog}) {
  const navigate = useNavigate();


    function deleteDog(e) {
      fetch(`/dogs/${e.target.id}`, {
        method: 'DELETE',
      })
      .then((r) => {
        if (r.ok) {
          handleDeleteDog(parseInt(e.target.id))
        }
        else {
          console.log('Error')
        }
      })
    }

    function editDog(dog) {
      navigate('/updateDog')
      updateDog(dog)
    }


    let dogs = userDogs.map((dog) => {
      let dogTags = dog.tags.map((tag) => {
        return <li key={tag.id}>{tag.title}</li>
      })
      return (
        <div key={dog.id} className='card'>
          <div className='card-body'>
          <img className='card-img-top' alt='dog' src={dog.picture_url}></img>
          <h1 className='card-title'>{dog.name}</h1>
          <div className='card-subtitle'>{dog.age}</div>
          <div>Things I Love:</div>
          {dogTags}
          <button className='btn btn-primary' id={dog.id} onClick={() => editDog(dog)}>Edit</button>
          <button className='btn btn-primary' id={dog.id} onClick={deleteDog}>Delete</button>
          </div>
        </div>
      )
    })

    
  return (
    <div>
      <NavBar />
      {dogs}
    </div>
  )
}

export default MyPups