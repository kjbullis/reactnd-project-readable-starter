import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts'
import Categories from './Components/Categories'
import Comments from './Components/Comment.js'
import Modal from 'react-modal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Readable</h1>
        <h2>Category</h2>
        <Posts></Posts>
        <Categories></Categories>
        <Comments></Comments>
        <Modal className='add-comment-modal'></Modal>
        <Modal className='add-post-modal'></Modal>
      </div>
    );
  }
}

export default App;
