import React from 'react'
import axios from 'axios'
import Card from '../Card/Card.js'

class ShoeList extends React.Component {
  componentDidMount () {
    axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=50')
      .then(res => {
        this.props.setSneaker(res.data)
        // console.log('Hey', res, this.state.sneakers)
      })
  }

  render () {
    const { sneakers } = this.props
    let shoes = ''
    if (sneakers.length !== 0) {
      shoes = (
        sneakers.results.map(sneaker =>
          <Card key ={sneaker.id}
            title= {sneaker.brand}
            name= {sneaker.name}
            imageUrl= {sneaker.media.imageUrl}
            body= {sneaker.releaseDate}
          />
        )
      )
    } else {
      shoes = '...Loading'
    }

    return (
      <div className='container'>
        <div className='grid'>
          {shoes}
        </div>
      </div>
    )
  }
}

export default ShoeList
