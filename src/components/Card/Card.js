import React from 'react'

function Card ({ title, imageUrl, body, name, releaseDate }) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-name'>
        <h8>{name}</h8>
      </div>
      <div className='card-body'>
        <p>{body}</p>
      </div>
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
