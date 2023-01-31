import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'

function MyPups({userDogs}) {

    console.log(userDogs)


    let dogs = userDogs.map((dog) => {
      return (
        <div key={dog.id} className='card'>
          <div className='card-body'>
          <img className='card-img-top' alt='dog' src={dog.picture_url}></img>
          <h1 className='card-title'>{dog.name}</h1>
          <div className='card-subtitle'>{dog.age}</div>
          <button className='btn btn-primary'>Edit</button>
          <button className='btn btn-primary'>Delete</button>
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