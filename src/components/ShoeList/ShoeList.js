import React from 'react'
import Card from '../Card/Card.js'

function ShoeList (props) {
  return (
    <div className='shoeList'>
      <div className='gridWrapper'>
        {props.sneakers.filter(sneaker => sneaker.media.imageUrl !== null).map(sneaker => (
          <Card sneaker={sneaker} key={sneaker.id} />)
        )}
      </div>
    </div>
  )
}

export default ShoeList
