import React, { Component } from 'react'
import loading from './loading.gif'

export class Ourspinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default Ourspinner
