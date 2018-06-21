import React, { Component } from 'react'
import Comments from './Comments'

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
  
    //RIGHT NOW, I'M USING THIS.STATE.POST  BUT I'M ALSO PASSING IN THIS.PROPS.POST  
    //FOR NOW PROPS.POST IS EMPTY, I NEED TO FIGURE OUT HOW TO PASS IN THE POST OBJECT

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
        const post = this.state.post
        return ( 
            <div className='post'>
                <section>
                    <h3 className={`category-${post.category}`}>{post.title}</h3>
                    <h4>by {post.author}</h4>
                    <h5><time>{new Intl.DateTimeFormat('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: '2-digit' 
                    }).format(post.timestamp)}</time></h5>
                    <div>{post.body}</div>
                    <p>Vote Score: {post.voteScore}</p>
                    <Comments postId={post.id} ></Comments>
                </section>
                <aside className='voting'>
                    <button className='vote' onClick={this.voteUp(post.id)}>^</button>
                    <p className='vote-score'>{post.voteScore}</p>
                    <button className='down-arrow vote' onClick={this.voteDown(post.id)}>^</button>
                </aside>
            </div>
        )
    }
}
