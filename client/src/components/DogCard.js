import React from 'react'
import OwnerCard from './OwnerCard'

function DogCard({dogs}) {
  console.log(dogs)
  let dog = dogs.map((dog) => {
    return (
      <div key={dog.id} className='card'>
        <img className='dogPic' src={dog.picture_url}></img>
        <p>{dog.name}</p>
        <p>{dog.age}</p>
        <button>Add to Favorites</button>
        <button>Hide</button>
        <OwnerCard />
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