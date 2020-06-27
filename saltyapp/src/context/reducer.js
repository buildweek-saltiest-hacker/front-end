export default function reducer(state, action){
    switch(action.type){
        case 'SET_CURRENT_COMMENT':
            return {
                ...state,
                currentComment: action.payload
            }
        default:
            return state;
    }
}