import React, { Component } from 'react'
import { log } from 'util';
import { connect } from 'react-redux'
import { addPosts, addCategories } from '../Actions'

const api = "http://localhost:3001"
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
'Accept': 'application/json',
'Authorization': token
}

class Posts extends Component {
  state = {
    currentPost: null
 }

    getPosts = () => {
        fetch(`${api}/posts`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(jsonData => jsonData)
        .then((returnedPosts) => {
            console.log('Posts from server', returnedPosts)  
            // this.setState(state => state.posts = returnedPosts)
            this.props.displayPosts(returnedPosts)
            }
        )    
    }

    showPostDetails= (post) => {

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
        console.log('Posts.js Props posts', this.props.posts)
        const posts = this.props.posts
        return (
        <div>
            <h3>Posts</h3>
            <ul className='post-list'>
            {posts.map((post) => (
                <li className='post' key={post.id}>
                    <div onClick={this.showPostDetails(post)}>
                        <h4 className={`category-${post.category}`}>{post.title}</h4>
                        <h5>by {post.author}</h5>
                        <h6><time>{new Intl.DateTimeFormat('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: '2-digit' 
                        }).format(post.timestamp)}</time></h6>
                        <div>{post.body}</div>
                    </div>
                    <p>Vote Score: {post.voteScore}</p>
                    <p>Comment Count: {post.commentCount}</p>
                    <button value={this.voteUp(post.id)}>Vote Up</button>
                    <button onClick={this.voteDown(post.id)}>Vote Down</button>
                    {/*<button onClick={this.openPostModal(post)}>Edit</button> How do I get access to openPostModal? Make it part of the store.*/}
                </li>
            ))}
            </ul>
        </div>
        )
    }
    }


    function mapStateToProps ({ posts, comments, categories }, currentPost)  {
        //convert posts (object of objects) to array of objects
        const postsArray = Object.values(posts)
        
        return {
            posts: postsArray,
            categories,
            currentPost,
        }
    }   

    function mapDispatchToProps (dispatch) {
        return {
            displayPosts: (posts) => dispatch(addPosts(posts)),
            displayCategories: (categories) => dispatch(addCategories(categories))
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
