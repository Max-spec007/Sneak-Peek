import React from 'react'
import axios from 'axios'

class ShoeList extends React.Component {
  state = {
    sneakers: []
  }

  componentDidMount () {
    axios.get('https://api.thesneakerdatabase.com/v1/sneakers?limit=50')
      .then(res => {
        console.log(res)
        this.setState({ sneakers: res.data })
      })
  }

  render () {
    return <ul>{this.state.sneakers.map(sneaker => <li key={sneaker.id}>{sneaker.name}</li>)}
    </ul>
  }
}

export default ShoeList
