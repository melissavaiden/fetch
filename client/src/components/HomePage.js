import React from 'react'
import DogCard from './DogCard'
import NavBar from './NavBar'


function HomePage({dogs}) {
  return (
    <div>
       <NavBar />
       <DogCard dogs={dogs}/>
    </div>
  )
}

export default HomePage