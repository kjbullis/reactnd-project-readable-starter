import React, { Component } from 'react'
import Posts from './Posts'
import Categories from './Categories'
import Modal from 'react-modal'

export default class CategoryView extends Component {
  render() {
    return (
      <div>
        <h3>Active Category{/*Active category will appear here*/}</h3>
        <Categories></Categories>
        <Posts></Posts>
        <Modal className='add-comment-modal'></Modal>
        <Modal className='add-post-modal'></Modal>
      </div>
    )
  }
}