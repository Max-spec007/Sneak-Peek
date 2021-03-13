import React from 'react'

const Card = (shoes) => {
  return (
    <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 phm navy'>
      <img alt ='sneaker' src={shoes.id} />
      <div>
        <h2>{shoes.brand}</h2>
        <h4>{shoes.name}</h4>
      </div>
    </div>
  )
}

export default Card
