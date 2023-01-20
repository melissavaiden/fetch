import React from 'react'
import OwnerCard from './OwnerCard'

function DogCard({dogs}) {
  console.log(dogs)
  let dog = dogs.map((dog) => {
    return (
      <div key={dog.id} className='card'>
        <div className='card-body'>
        <img className='card-img-top' alt='dog' src={dog.picture_url}></img>
        <h1 className='card-title'>{dog.name}</h1>
        <div className='card-subtitle'>{dog.age}</div>
        <button>Add to Favorites</button>
        <button>Hide</button>
        <OwnerCard />
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