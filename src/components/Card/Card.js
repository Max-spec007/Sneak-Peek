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

// const Card = (shoes) => {
//   return (
//     <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 phm navy'>
//       <img alt ='sneaker' src={shoes.id} />
//       <div>
//         <h2>{shoes.brand}</h2>
//         <h4>{shoes.name}</h4>
//       </div>
//     </div>
//   )
// }
//
// export default Card

// <div className='btn'>
//   <button>
//     <a>
//     View more
//     </a>
//   </button>
// </div>
