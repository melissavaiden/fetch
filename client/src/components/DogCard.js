import React from 'react'
import OwnerCard from './OwnerCard'

function DogCard() {
  return (
    <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAvSBo2z2n6-Wd_kGu0pc4JO3fz5F2jUOHVFQYQlLSg&s'></img>
        <h4>Loves:</h4>
        <ul>
            <div>Walks on the beach</div>
            <div>Digging in dirt</div>
            <div>Sleeping</div>
        </ul>
        <h4>Hates:</h4>
            <div>Loud Noises</div>
            <div>Loud Noises</div>
            <div>Loud Noises</div>
        <button>Add to Favorites</button>
        <button>Hide</button>
        <OwnerCard />
    </div>
  )
}

export default DogCard