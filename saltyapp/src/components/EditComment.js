import React, {useState, useContext, useRef, useEffect} from 'react';
import SaltyContext from '../context/saltyContext';

export default function EditComment() {

    const {state, dispatch} = useContext(SaltyContext);
    const [value, setValue] = useState(state.currentComment.comment)

    let ref = useRef();

    useEffect(() => {

        ref.current.focus();

    }, [])

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if(value.trim() === '') {

            alert('Cannot add a blank Comment');
        }else {
            dispatch({type: 'UPDATE_COMMENT', payload: value})
            setValue('')
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit} action="">
                <textarea ref={ref} onChange={handleChange} value={value} name="" id="" />
            <div>
                <button>Save</button>
            </div>
            </form>
        </div>
    )
}