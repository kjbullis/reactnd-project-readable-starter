import React, { Component } from 'react'


const api = "http://localhost:3001"
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
'Accept': 'application/json',
'Authorization': token
}

export default class AddPostModal extends Component {
    state = {
        categories: ['kevin', 'tries', 'again']
    }
  
    getCategories = () => {
        fetch(`${api}/categories`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(jsonData => jsonData.categories.map(category => category.name))
        .then(returnedCategories => this.setState(state => 
            state.categories = returnedCategories)) 
    }

    componentDidMount() {
        this.getCategories()
    }  


  render() {
    return (
        <div>
            <form>
                <label htmlFor='author'>Your name</label>
                <input type='text' id='author' name='author'/><br/>
                <label htmlFor='title'>Post Title</label>
                <input type='text' id='title' name='title'/><br/>
                <label htmlFor='category'>Category</label>
                <select id='category' name='category'>
                {this.state.categories.map((category) => (
                    <option key={category} className={`category-${category}`} value={category}>{category}</option>
                ))}
                </select><br/>
                <label htmlFor='body'>Message</label>
                <textarea id='body' name='body'/>
            </form>
        </div>
    )
  }
}
