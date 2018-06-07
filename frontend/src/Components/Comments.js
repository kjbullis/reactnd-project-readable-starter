import React, { Component } from 'react'

const api = "http://localhost:3001"
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
'Accept': 'application/json',
'Authorization': token
}

export default class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Hi'
      },
      {
       id: 2,
       title: 'there'
      }, 
      {
        id: 3,
        title: ' ,dude'
      }
    ]
  }

  getComments = () => {
      fetch(`${api}/comments`, { headers })
      .then(returnedPromise => returnedPromise.json())
      .then(jsonData => jsonData)
      .then(returnedPosts => this.setState(state => state.posts = returnedPosts)) 
  }

  componentDidMount() {
      this.getPosts()
  }  

  render() {

    return (
      <div>
        <h3>Posts</h3>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>
                <h4>{post.title}</h4>
                <h5>by {post.author}</h5>
                <div>{post.body}</div>
                <p>{post.category}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}