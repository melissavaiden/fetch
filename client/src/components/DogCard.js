import React from 'react'
import OwnerCard from './OwnerCard'

function DogCard({dogs}) {

  let dog = dogs.map((dog) => {
    console.log(dog)
    return (
      <div key={dog.id} className='card'>
        <div className='card-body'>
        <img className='card-img-top' alt='dog' src={dog.picture_url}></img>
        <h1 className='card-title'>{dog.name}</h1>
        <div className='card-subtitle'>Age: {dog.age}</div>
        <button className='btn btn-primary'>Add to Favorites</button>
        <button className='btn btn-primary'>Hide</button>
        <OwnerCard dog_owner={dog.user}/>
        </div>
      </div>
    )
  })
  return (
    <div>
      <div className='container'>
        <div className='row'>
          {dog}
        </div>
      </div>
    </div>
  )
}

export default DogCard