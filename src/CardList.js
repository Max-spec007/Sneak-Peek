import React from 'react'
import Card from './Card'

const CardList = ({ shoes }) => {
  return (
    <div>
      {
        shoes.map((user, i) => {
          return (
            <Card
              key={i}
              id={shoes[i].id}
              name={shoes[i].name}
            />
          )
        })
      }
    </div>
  )
}

export default CardList
