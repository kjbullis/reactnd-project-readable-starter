export const ADD_POSTS = 'ADD_POSTS'
export const ADD_OR_EDIT_POST = 'ADD_OR_EDIT_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENTS = 'ADD_COMMENTS'
export const ADD_OR_EDIT_COMMENT = 'ADD_OR_EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const SEE_POST_DETAILS = 'SEE_POST_DETAILS'
export const ADD_CATEGORIES = 'ADD_CATEGORIES'


export const addPosts = ({ posts }) => ({
    type: ADD_POSTS,
    posts
})

export const addOrEditPost = ({ post }) => ({
    type: ADD_OR_EDIT_POST,
    post,
}) 

export const editPost = ({ post }) => ({
    type: EDIT_POST,
    post,
})

export const deletePost = ({ postID }) => ({
    type: DELETE_POST,
    postID,
})

export const addOrEditComments = ({ posts }) => ({
    type: ADD_OR_EDIT_COMMENT,
    posts
}) 

export const deleteComment = ({ commentID }) => ({
    type: DELETE_COMMENT,
    commentID,
})

export const editComment = ({ comment }) => ({
    type: EDIT_COMMENT,
    comment,
})

export const seePostDetails = ({ id }) => ({
    type: SEE_POST_DETAILS,
    id,
})

export const addCategories = ({ categories }) => ({
    type: ADD_CATEGORIES,
    categories
})

// //make local, move to view component

// const voteUp 

// const voteDown 

// const addOrEditPost 

// const addOrEditComment

// const viewByTimeStamp

// const viewByVoteScore
