import {
    ADD_POSTS,
    ADD_OR_EDIT_POST,
    DELETE_POST,
    ADD_COMMENTS,
    ADD_OR_EDIT_COMMENT,
    DELETE_COMMENT,
    SEE_POST_DETAILS,
    ADD_CATEGORIES
} from '../Actions'
import { combineReducers } from 'redux';

const initialPostsState = [
    {
        id: 'alekjr234r2',
        timestamp: 1467166872634,
        title: `KB Test Post 1`,
        body: `When I was first asked to make a film about my nephew, Hubert Farnsworth, I thought "Why should I?" Then later, Leela made the film. But if I did make it, you can bet there would have been more topless women on motorcycles. Roll film! You guys aren't Santa! You're not even robots. How dare you lie in front of Jesus? It doesn't look so shiny to me. Tell her you just want to talk. It has nothing to do with mating. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry!`,
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
      },
     {
        id: 'alkjf29342w',
        timestamp: 1468479767190,
        title: `KB Test Post 2`,
        body: `Just kidding. It takes more than 10 minutes to learn technology.`,
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
      }
    ]


function posts (state = initialPostsState, action) {
    const { posts, post, id } = action;

    switch (action.type) {
        case ADD_POSTS:
            const newState = [...state, ...posts]
            console.log('New State', newState)
            return {
                newState
            };
        case ADD_OR_EDIT_POST:
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

function comments (state = [], action) {
    const { comments, comment, id} = action

    switch (action.type) {
        case ADD_COMMENTS:
            return {
                ...state,
                ...comments
            };
        case ADD_OR_EDIT_COMMENT:
            return {
                ...state,
                [comment.id]: {
                    comment 
                } 
            };    
        case DELETE_COMMENT:
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

function categories (state = [], action) {
    const { categories } = action

    switch (action.type) {
        case ADD_CATEGORIES:
            return {
                ...state,
                categories
            };
        default:
            return state;
    }    
}


export default combineReducers({
    posts, 
    comments,
    categories
})