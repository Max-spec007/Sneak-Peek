import React from 'react'
import axios from 'axios'
// import Card from './Card'

class ShoeList extends React.Component {
  state = {
    sneakers: []
  }

  componentDidMount () {
    axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=50')
      .then(res => {
        this.setState({ sneakers: res.data })
        // console.log('Hey', res, this.state.sneakers)
      })
  }

  render () {
    const { sneakers } = this.state
    let shoes = ''
    if (sneakers.length !== 0) {
      shoes = (
        sneakers.results.map(sneaker => <li key={sneaker.id}>{sneaker.brand}{sneaker.name}{sneaker.releaseDate}</li>)
      )
    } else {
      shoes = '...Loading'
    }

    return (
      <ul>
        {shoes}
      </ul>
    )
  }
}

export default ShoeList
