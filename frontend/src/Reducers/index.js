import {
    ADD_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    SEE_POST_DETAILS,
} from '../Actions'
import { combineReducers } from 'redux';

const initialPostsState = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'KB Test Post 1',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'KB Test Post 2',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
      }
}


function posts (state = initialPostsState, action) {
    const { posts, post, id } = action;

    switch (action.type) {
        case ADD_POSTS:
            return {
                ...state,
                ...posts
            };
        case ADD_POST: 
            return {
                ...state,
                post
            };
        case EDIT_POST:
            return {
                ...state,
                [post.id]: {
                    post 
                } 
            };    
        case DELETE_POST:
            return {
                ...state,
                [id]: {
                    deleted: true
                } 
            };        
        default:
            return state;
    }    
}

function comments (state = {}, action) {
   return state;
}

function categories (state = [], action) {
   return state;
}


export default combineReducers({
    posts, 
    comments,
    categories
})