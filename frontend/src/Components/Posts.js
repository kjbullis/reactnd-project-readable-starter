import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
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
        const hardCodedPosts = [
            {
                id: 'kb3alekjr234r2',
                timestamp: 1467166872634,
                title: `KB Test Post 3`,
                body: `When I was first asked to make a film about my nephew, Hubert Farnsworth, I thought "Why should I?" Then later, Leela made the film. But if I did make it, you can bet there would have been more topless women on motorcycles. Roll film! You guys aren't Santa! You're not even robots. How dare you lie in front of Jesus? It doesn't look so shiny to me. Tell her you just want to talk. It has nothing to do with mating. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry!`,
                author: 'thingtwo',
                category: 'react',
                voteScore: 6,
                deleted: false,
                commentCount: 2
              },
             {
                id: 'kb4alkjf29342w',
                timestamp: 1468479767190,
                title: `KB Test Post 4`,
                body: `Just kidding. It takes more than 10 minutes to learn technology.`,
                author: 'thingone',
                category: 'redux',
                voteScore: -5,
                deleted: false,
                commentCount: 0
              }
            ]

        fetch(`${api}/posts`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(jsonData => jsonData)
        .then((returnedPosts) => {
            console.log('Posts from server', returnedPosts) 
            console.log('Hard Coded Posts', hardCodedPosts)      
            // this.setState(state => state.posts = returnedPosts)
            this.props.displayPosts(hardCodedPosts)
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
            <h2 className='section-heading'>posts</h2>
            <ul className='post-list'>
            {posts.map((post) => (
                <Link key={post.id} to='/single-post'>
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
                            <p>Comments: {post.commentCount}</p>
                        </div>                    
                        <aside className='voting'>
                            <button className='vote' onClick={this.voteUp(post.id)}>^</button>
                            <p className='vote-score'>{post.voteScore}</p>
                            <button className='down-arrow vote' onClick={this.voteDown(post.id)}>^</button>
                        </aside>
                        
                        {/*<button onClick={this.openPostModal(post)}>Edit</button> How do I get access to openPostModal? Make it part of the store.*/}
                    </li>
                </Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))