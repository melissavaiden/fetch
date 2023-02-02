import React from 'react'
import NavBar from './NavBar'

function MyPups({userDogs, handleDeleteDog}) {

    function deleteDog(e) {
      fetch(`/dogs/${e.target.id}`, {
        method: 'DELETE',
      })
      .then((r) => {
        if (r.ok) {
          handleDeleteDog(e.target.id)
        }
        else {
          console.log('Error')
        }
      })
    }

    function editDog(e) {
      console.log(e.target.id)
    }


    let dogs = userDogs.map((dog) => {
      return (
        <div key={dog.id} className='card'>
          <div className='card-body'>
          <img className='card-img-top' alt='dog' src={dog.picture_url}></img>
          <h1 className='card-title'>{dog.name}</h1>
          <div className='card-subtitle'>{dog.age}</div>
          <button className='btn btn-primary' id={dog.id} onClick={editDog}>Edit</button>
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