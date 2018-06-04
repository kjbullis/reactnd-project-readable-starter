import React, { Component } from 'react'

const api = "http://localhost:3001"
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
'Accept': 'application/json',
'Authorization': token
}

class Categories extends Component {
    state = {
        categories: ['kevin', 'tries', 'again']
    }
  
    getCategories = () => {
        fetch(`${api}/categories`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(jsonData => jsonData.categories.map(category => category.name))
        .then(returnedCategories => this.setState(state => state.categories = returnedCategories)) 
    }

    componentDidMount() {
        this.getCategories()
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

export default Categories