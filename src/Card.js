import React from 'react'

const Card = (props) => {
  return (
    <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 phm navy'>
      <img alt ='shoe' src={props.id} />
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  )
}

export default Card
