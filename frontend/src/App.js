import React, { Component } from 'react'
import './App.css'
import Home from './Components/Home'
import CategoryView from './Components/CategoryView'
import PostDetail from './Components/PostDetail'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Readable</h1>
                <Home></Home>
                <CategoryView></CategoryView>
                <PostDetail></PostDetail>
            </div>
        );
    }
}

export default App;
