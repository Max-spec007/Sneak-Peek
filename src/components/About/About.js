import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class About extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Cell col={4}>Left Side</Cell>
          <Cell className="about-right-col" col={8}>Right Side</Cell>
        </Grid>
      </div>
    )
  }
}

export default About
