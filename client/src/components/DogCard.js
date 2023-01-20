import React from 'react'
import OwnerCard from './OwnerCard'

function DogCard({dogs}) {
  console.log(dogs)
  let dog = dogs.map((dog) => {
    return (
      <div key={dog.id}>
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
      {dog}
    </div>
  )
}

export default DogCard