import React, { Component } from 'react'
import Body from './Body'
import Vote from './Vote'

export default class Post extends Component {
  render() {
    return (
      <div>
        <Vote></Vote>
        <Body></Body>
        <div className='post-date'>Date</div>
      </div>
    )
  }
}
