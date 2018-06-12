import React, { Component } from 'react'
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
'Authorization': token
}


class App extends Component {
    state = {
        newPostModalOpen: true,
        categories: ['kevin', 'tries', 'again']
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
    }
    componentDidMount() {
        this.getCategories()
    }  

    closeAddPostModal = () => {
        this.setState(() => ({
            newPostModalOpen: false
        }))    
    }

    addPost = () => {
        this.closeAddPostModal()
        //Get timestamp
        const timeStamp = Date.now()
        //
        const voteScore = 0;
        const deleted = false;        
    }




    render() {
        return (
            <div className="App">
                <h1>Readable</h1>
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={this.state.newPostModalOpen}
                    onRequestClose={this.closeAddPostModal}
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
                                onClick={this.addPost}>
                            Add Post</button>
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
