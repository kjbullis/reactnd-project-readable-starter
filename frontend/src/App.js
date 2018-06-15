import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Home from './Components/Home'
import CategoryView from './Components/CategoryView'
import PostDetail from './Components/PostDetail'
import Modal from 'react-modal'


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
        postModalOpen: true,
        commentModalOpen: true,
        categories: [],
        currentPost: null,
        loadingFood: false,
    }
  
    getCategories = () => {
        fetch(`${api}/categories`, { headers })
        .then(returnedPromise => returnedPromise.json())
        .then(jsonData => jsonData.categories.map(category => category.name))
        .then(returnedCategories => this.setState(state => 
            state.categories = returnedCategories)) 
    }

    componentWillMount() {
        Modal.setAppElement('#root')
        // this.addPost()
        // this.editPost()
        // this.voteUp()
        // this.voteDown()
        // this.deletePost()
    }
    componentDidMount() {
        this.getCategories()
    }  

    openPostModal = () => {
        this.setState((currentPost) => ({
            postModalOpen: true,
            currentPost: currentPost
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


    setEdit = () => {
        this.setState(() => ({
            modalOption: 'edit'
        }))    
    }


    addPost = () => {
        // this.closePostModal()
        const id = Math.random().toString(36).substr(-8)
        const timeStamp = Date.now()
        const title = "Title by Kevin"
        const body = "Body text"
        const author = "Kevin"
        const category = "react"

        //Hard coded fetch
        const formObject = {
                id,
                timeStamp,
                title,
                body,
                author,
                category
        }

        //the following successfully creates a JSON object
        const form = JSON.stringify(formObject)
        console.log('JSONned form data', form)
        //form looks like this
        // {
        //     "id":"bt91jrai",
        //     "timestamp":1528922356721,
        //     "title":"Title by Kevin",
        //     "body":"Body text",
        //     "author":"Kevin",
        //     "category":"react"
        // }
    
        fetch(`${api}/posts`, {
            method: 'post',
            headers,
            body: form
          })
          .then(returnedPromise => returnedPromise.json())
          .then(jsonData => jsonData)
          .then(returnedPosts => console.log("Data returned from addPost:", returnedPosts)) 
    }

    editPost = () => {
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

    deletePost = () => {
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
        const { foodModalOpen, loadingFood, food, ingredientsModalOpen,  } = this.state
        const { calendar, remove, selectRecipe } = this.props

        return (
            <div className="App">
                <h1>Readable</h1>
                <button>+</button>
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={this.state.postModalOpen}
                    onRequestClose={this.closePostModal}
                    contentLabel='Modal'                    
                >
                    <div>
                        <form>
                            <label htmlFor='title'>Post Title</label>
                            <input type='text' id='title' name='title'/><br/>
                            <label htmlFor='body'>Post Body</label>
                            <textarea id='body' name='body'/><br/>
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
                                className='icon-button'
                                type="submit"
                                onClick={this.addPost}
                            >Add Post</button>
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
                        <form>
                            <label htmlFor='author'>Your name</label>
                            <input type='text' id='author' name='author'/><br/>
                            <label htmlFor='body'>Comment</label>
                            <textarea id='body' name='body'/><br/>
                           
                            
                            <input name="id" type="hidden" value={Math.random().toString(36).substr(-8)}/>
                            <button 
                                className='icon-button'
                                type="submit"
                                onClick={this.addComment}
                            >{}</button>
                        </form>
                    </div>
                </Modal>
                <Home></Home>
                <CategoryView></CategoryView>
                <PostDetail></PostDetail>

            </div>
        );
    }
}

export default App;
