import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Home from './Components/Home'
import CategoryView from './Components/CategoryView'
import PostDetail from './Components/PostDetail'
import Modal from 'react-modal'
import { Route, withRouter, Link } from 'react-router-dom'
import {
    addPosts, addCategories
} from './Actions'


const api = "http://localhost:3001"
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
'Accept': 'application/json',
'Content-Type': 'application/json',
'Authorization': token
}


class App extends Component {
    state = {
        posts: [],
        comments: [],
        categories: [],
        postModalOpen: false,
        commentModalOpen: false,
        activePost: null,
        loadingFood: false,
        activeCategory: 'react'
    }
    
    componentWillMount() {
        Modal.setAppElement('#root')
        this.fetchCategories()
    }
    
    componentDidMount() {
        
    }  



    fetchCategories = () => {
        fetch(`${api}/categories`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(jsonData => jsonData.categories.map(category => category.name))
        .then(returnedCategories => this.setState(state => 
            state.categories = returnedCategories))
         //.then(use a function passed as a prop to add to the Store?)     
    }

    //Get comments for a specific post.
    fetchPostComments = (id) => {
        fetch(`${api}/comments/${id}`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(jsonData => jsonData)
        .then(returnedComments => this.setState(state => state.comments = returnedComments)) 
    }

    openPostModal = () => {
        this.setState((activePost) => ({
            postModalOpen: true,
            activePost
        }))    
    }

    closePostModal = () => {
        this.setState(() => ({
            postModalOpen: false
        }))    
    }

    openCommentModal = () => {
        this.setState(() => ({
            commentModalOpen: true
        }))    
    }

    closeCommentModal = () => {
        this.setState(() => ({
            commentModalOpen: false
        }))    
    }

    addPostToServer = () => {
        // this.closePostModal()

        //Hard coded post object. Replace with data from state, which is in turn from the form
        const id = Math.random().toString(36).substr(-8)
        const timeStamp = Date.now()
        const title = "Title by Kevin"
        const body = "Body text"
        const author = "Kevin"
        const category = "react"
        
        const postObject = {
                id,
                timeStamp,
                title,
                body,
                author,
                category
        }
        //convert postObject to JSON
        const post = JSON.stringify(postObject)
    
        fetch(`${api}/posts`, {
            method: 'post',
            headers,
            body: post
          })
          .then(returnedPromise => returnedPromise.json())
          .then(jsonData => jsonData)
          .then(returnedPosts => console.log("Data returned from addPost:", returnedPosts)) 
    }

    editPostonServer = () => {
        // this.closeCommentModal()

        //Hard coded post object. Replace with data from state, which is in turn from the form
        const id = "223gtqhq"
        const title = 'New title by Kevin'
        const body = "How do you like them apples?"
        const formObject = {
            title,
            body
        }

        //the following successfully creates a JSON object
        const form = JSON.stringify(formObject)
        console.log('JSONned edit-form data', form)

        
        fetch(`${api}/posts/${id}`, {
            method: 'put',
            headers,
            body: form
          })
          .then(returnedPromise => returnedPromise.json())
          .then(jsonData => jsonData)
          .then(returnedPosts => console.log("Data returned from editPost:", returnedPosts)) 
    }

    voteUp = () => {
        //Hard coded. Get from post and button.
        const id = "223gtqhq"
        const option = 'upVote'
        const formObject = {
            option
        }

        //the following successfully creates a JSON object
        const form = JSON.stringify(formObject)
        console.log('JSONned edit-form data', form)

        
        fetch(`${api}/posts/${id}`, {
            method: 'post',
            headers,
            body: form
          })
          .then(returnedPromise => returnedPromise.json())
          .then(jsonData => jsonData)
          .then(returnedPosts => console.log("Data returned from voteUp:", returnedPosts)) 
    }

    voteDown = () => {
        //Hard coded. Get from post and button
        const id = "9dipb9fv"
        const option = 'downVote'
        const formObject = {
            option
        }

        //the following successfully creates a JSON object
        const form = JSON.stringify(formObject)
        console.log('JSONned edit-form data', form)

        
        fetch(`${api}/posts/${id}`, {
            method: 'post',
            headers,
            body: form
          })
          .then(returnedPromise => returnedPromise.json())
          .then(jsonData => jsonData)
          .then(returnedPosts => console.log("Data returned from vote:", returnedPosts)) 
    }

    deletePostfromServer = () => {
        //Hard coded. Get id from post.
        const id = "280ke2jj"
        
        fetch(`${api}/posts/${id}`, {
            method: 'delete',
            headers
          })
          .then(returnedPromise => returnedPromise.json())
          .then(jsonData => jsonData)
          .then(returnedPosts => console.log("Data returned from editPost:", returnedPosts)) 
    }
    


    render() {
        const {   } = this.state
        const { calendar, remove, selectRecipe } = this.props

        return (
            <div className="App">
                <Link to='/'><h1>Readable</h1></Link>
                <button className='add-post-button' onClick={this.openPostModal}>+</button>
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={this.state.postModalOpen}
                    onRequestClose={this.closePostModal}
                    contentLabel='Modal'           
                >
                    <div>
                        <form className='postAddEdit'>
                            <label htmlFor='title'>Post Title</label>
                            <input type='text' id='title' name='title'/><br/>
                            <label htmlFor='body'>Post Body</label>
                            <textarea id='body' name='body' rows={10}/><br/>
                            <label htmlFor='author'>Your name</label>
                            <input type='text' id='author' name='author'/><br/>
                            <label htmlFor='category'>Category</label>
                            <select id='category' name='category'>
                            {this.state.categories.map((category) => (
                                <option key={category} className={`category-${category}`} value={category}>{category}</option>
                            ))}
                            </select><br/>
                            <input name="id" type="hidden" value={Math.random().toString(36).substr(-8)}/>
                            <button 
                                className='post-button'
                                type="submit"
                                onClick={this.addPost}
                            >Post
                            </button>
                            <button
                                class='cancel-button'
                                type='button'
                                onClick={this.closePostModal}
                            >Cancel
                            </button>  
                        </form>
                    </div>
                </Modal>
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={this.state.commentModalOpen}
                    onRequestClose={this.closeCommentModal}
                    contentLabel='Modal'                    
                >
                    <div>
                        <form className='commentAddEdit'>
                            <label htmlFor='author'>Your name</label>
                            <input type='text' id='author' name='author'/><br/>
                            <label htmlFor='body'>Comment</label>
                            <textarea id='body' name='body' rows={10}/><br/>
                            <input name="id" type="hidden" value={Math.random().toString(36).substr(-8)}/>
                            <button 
                                className='post-button'
                                type="submit"
                                onClick={this.addComment}
                            >Post
                            </button>
                            <button
                                class='cancel-button'
                                type='button'
                                onClick={this.closeCommentModal}
                            >Cancel
                            </button>    

                        </form>
                    </div>
                </Modal>
                <Route exact path='/' render={() => (
                    <Home></Home>
                )}/>
                <Route exact path={`/${this.state.activeCategory}`} render={() => (
                    <CategoryView activeCategory={this.state.activeCategory}></CategoryView>
                )}/> 
                <Route exact path='/single-post' render={() => (
                    <PostDetail post={this.state.activePost}></PostDetail>
                )}/>    
                    
                

            </div>
        );
    }
}

//Using destructuring to get posts, calendar, and categories from the Store state. 
//Now the App component should have access to posts, comments, and categories. But, does Home? etc?
function mapStateToProps ({ categories }, activePost)  {
    
    return {
        categories,
        activePost,
    }
}    

// function mapDispatchToProps (dispatch) {
//     return {
//         displayPosts: (posts) => dispatch(addPosts(posts)),
//         displayCategories: (categories) => dispatch(addCategories(categories))
//     }
// }
  
  
  
export default withRouter(connect(mapStateToProps)(App))
