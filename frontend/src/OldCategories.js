import React, { Component } from 'react'
// import * as ReadableAPI from '../ReadableAPI'

export default class Categories extends Component {
    state = {
        categories: ['kevin', 'tries', 'again']
    }
  
    componentDidMount() {
        const api = "http://localhost:3001"

        // Generate a unique token for storing your bookshelf data on the backend server.
        let token = localStorage.token
        if (!token)
        token = localStorage.token = Math.random().toString(36).substr(-8)

        const headers = {
        'Accept': 'application/json',
        'Authorization': token
        }


        fetch(`${api}/categories`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(jsonData => {
            console.log('returned JSON accessing categories array within object', jsonData.categories)
            const categoryNames = jsonData.categories.map(category => category.name)
            console.log('Array of names', categoryNames)
            return categoryNames})
        .then(returnedCategories => this.setState(state => state.categories = returnedCategories)) 
    }

    
    render() {  
        console.log('categories', this.state.categories)
    return (
      <div>
        <ul className='category-list'>
            {this.state.categories.map((category) => (
                <li key={category}>{category}</li>
            ))}
        </ul>
      </div>  
    )
  }
}
