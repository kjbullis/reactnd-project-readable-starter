import React, { Component } from 'react'

export default class Vote extends Component {
  render() {
    return (
      <div>
        <div className='up-vote'>Up</div>
        <p>1</p>
        <div className='down-vote'>Down</div>
      </div>
    )
  }
}
