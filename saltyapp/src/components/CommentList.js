import React, {useContext} from 'react';
import SaltyContext from '../context/saltyContext';
import Comment from '../components/Comment';

export default function CommentList() {
    const {state} = useContext(SaltyContext);

    return (
        <div>
            {state.comments.map((com, i) => {
                return <Comment comment={com} key={i} />
            })}
        </div>
    )
}