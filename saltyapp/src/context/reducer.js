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
        case 'UPDATE_COMMENT':
                const updatedComment = {
                    ...state.currentComment,
                    comment: action.payload
                }

                const updatedComentIndex = state.comments.findIndex(
                    comment => comment.commentid === state.currentComment.commentid
                )

                const updatedComments = [
                    ...state.comments.slice(0, updatedComentIndex),
                    updatedComment,
                    ...state.comments.slice(updatedComentIndex + 1)
                ];

                return {
                    currentComment: null,
                    comments: updatedComments
                }
        default:
            return state;
    }
}