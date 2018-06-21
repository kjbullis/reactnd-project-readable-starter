import React, { Component } from 'react'

const api = "http://localhost:3001"
const id = '8xf0y6ziyjabvozdd253nd'
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
'Accept': 'application/json',
'Authorization': token
}

export default class Comments extends Component {
  state = {
    comments: [{id: 1, timesstamp: 1, body: 'hi', author: 'me'}]
  }

  getComments = () => {
      fetch(`${api}/posts/${id}/comments`, { headers })
      .then(returnedPromise => returnedPromise.json())
      .then(returnedComments => this.setState(state => state.comments = returnedComments))
  }

  componentDidMount() {
      this.getComments()
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
        <h4>Comments</h4>
        <ul>
            {this.state.comments.map((comment) => (
            <li key={comment.id} className='comment'>
                <aside className='voting'>
                    <button className='vote' onClick={this.voteUp(comment.id)}>^</button>
                    <p className='vote-score'>{comment.voteScore}</p>
                    <button className='down-arrow vote' onClick={this.voteDown(comment.id)}>^</button>
                </aside>
                <section>
                    <h5><time>{new Intl.DateTimeFormat('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: '2-digit' 
                    }).format(comment.timestamp)}</time></h5>
                    <p>{comment.body}</p>
                    <h5>by {comment.author}</h5>
                </section>
            </li>
        ))}
        </ul>
      </div>
    )
  }
}