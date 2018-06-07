import React, { Component } from 'react'
//import Comments from './Comments'

const id = '8xf0y6ziyjabvozdd253nd'
const api = "http://localhost:3001"
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
'Accept': 'application/json',
'Authorization': token
}

export default class PostDetail extends Component {
    state = {
        post: []
    }
  
    getPost = () => {
        fetch(`${api}/posts/${id}`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(returnedPost => this.setState(state => state.post = returnedPost))
    }

    componentDidMount() {
        this.getPost()
    }  

    voteUp(id) {
        //increment the voteScore in state for current post
        //increment the voteScore on server for current post
    }

    voteDown(id) {
        //decrement the voteScore in state for current post
        //decrement change the voteScore on server for current post
    }

    render() {
        return (
        <div>
            <h3>{this.state.post.title}</h3>
            <h4>by {this.state.post.author}</h4>
            <h5><time>{new Intl.DateTimeFormat('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: '2-digit' 
            }).format(this.state.post.timestamp)}</time></h5>
            <div>{this.state.post.body}</div>
            <p>Vote Score: {this.state.post.voteScore}</p>
            <p>Comment Count: {this.state.post.commentCount}</p> 
            <button value={this.voteUp(this.state.post.id)}>Vote Up</button>
            <button onClick={this.voteDown(this.state.post.id)}>Vote Down</button>   
        </div>
        )
  }
}
