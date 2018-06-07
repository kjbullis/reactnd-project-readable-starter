import React, { Component } from 'react'
import Posts from './Posts'
import Categories from './Categories'
import Modal from 'react-modal'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Categories></Categories>
        <Posts></Posts>
        <Modal className='add-comment-modal'></Modal>
        <Modal className='add-post-modal'></Modal>
      </div>
    )
  }
}
