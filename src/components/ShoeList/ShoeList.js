import React from 'react'
import axios from 'axios'

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
        sneakers.results.map(sneaker => <li key={sneaker.id}>{sneaker.brand}{sneaker.name}{sneaker.releaseDate}{sneaker.year}</li>)
      )
    } else {
      shoes = '....Loading'
    }

    return (
      <div>
        <ul> {shoes}
        </ul>
      </div>
    )

    // return <ul>
    // </ul>
  }
}

export default ShoeList
