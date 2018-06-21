import React, { Component } from 'react'
import Posts from './Posts'
import Categories from './Categories'
import Modal from 'react-modal'

export default class CategoryView extends Component {
  render() {
    console.log('Category View Props', this.props)
    return (
      <div>
        <h2 className={`section-heading category-${this.props.activeCategory}`}>{this.props.activeCategory}</h2>
        <Posts></Posts>
        <Modal className='add-comment-modal'></Modal>
        <Modal className='add-post-modal'></Modal>
      </div>
    )
  }
}