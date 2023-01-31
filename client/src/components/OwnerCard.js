import React from 'react'

function OwnerCard({dog_owner}) {
  return (
    <div>
        <br></br>
        <h2>My owner's name is {dog_owner.username}!</h2>
    </div>
  )
}

export default OwnerCard