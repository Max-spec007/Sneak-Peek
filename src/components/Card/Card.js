import React from 'react'

function Card (props) {
  return (
    <div className='card-container'>
      <img alt={props.sneaker.name} src={props.sneaker.media.imageUrl} />
      <h2>{props.sneaker.brand}</h2>
      <h6>{props.sneaker.name}</h6>
      <p>{props.sneaker.releaseDate}</p>
    </div>
  )
}

export default Card
