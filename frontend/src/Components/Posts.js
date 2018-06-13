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
    posts: [{id: 1}]
  }

  getPosts = () => {
      fetch(`${api}/posts`, { headers })
      .then(returnedPromise => returnedPromise.json())
      .then(jsonData => jsonData)
      .then(returnedPosts => this.setState(state => state.posts = returnedPosts)) 
  }

    componentDidMount() {
        this.getPosts();
    } 
  
    voteUp(id) {
         //change the voteScore in state for current post
          //change the voteScore on server for current post
    }

    voteDown(id) {
        //the voteScore in state for current post
        //change the voteScore on server for current post
    }

  render() {

    return (
      <div>
        <h3>Posts</h3>
        <ul className='post-list'>
          {this.state.posts.map((post) => (
            <li className='post' key={post.id}>
                <h4 className={`category-${post.category}`}>{post.title}</h4>
                <h5>by {post.author}</h5>
                <h6><time>{new Intl.DateTimeFormat('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: '2-digit' 
                }).format(post.timestamp)}</time></h6>
                <div>{post.body}</div>
                <p>Vote Score: {post.voteScore}</p>
                <p>Comment Count: {post.commentCount}</p>
                <button value={this.voteUp(post.id)}>Vote Up</button>
                <button onClick={this.voteDown(post.id)}>Vote Down</button>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}
