export default function reducer(state, action){
    switch(action.type){
        case 'SET_CURRENT_COMMENT':
            return {
                ...state,
                currentComment: action.payload
            }
        case 'DELETE_COMMENT':
            const deletedComment = state.comments.filter(
                com => com.commentid != action.payload
            );

            return {
                ...state,
                comments: deletedComment
            }
        default:
            return state;
    }
}