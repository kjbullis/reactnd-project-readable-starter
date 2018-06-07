export const SEE_POST_DETAILS = 'SEE_POST_DETAILS'
export const SAVE_POST = 'SAVE_POST'
export const SAVE_COMMENT = 'SAVE_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'


export const seePostDetails = ({ id }) => ({
    type: SEE_POST_DETAILS,
    id,
})

export const savePost = ({ post }) => ({
    type: SAVE_POST,
    post,
}) 

export const saveComment = ({ comment }) => ({
    type: SAVE_COMMENT,
    comment,
}) 

export const deletePost = ({ postID }) => ({
    type: DELETE_POST,
    postID,
})

export const deleteComment = ({ commentID }) => ({
    type: DELETE_COMMENT,
    commentID,
})

export const editPost = ({ post }) => ({
    type: EDIT_POST,
    post,
})

export const editComment = ({ comment }) => ({
    type: EDIT_COMMENT,
    comment,
})




//make local, move to view component

const voteUp 

const voteDown 

const addOrEditPost 

const addOrEditComment

const viewByTimeStamp

const viewByVoteScore
