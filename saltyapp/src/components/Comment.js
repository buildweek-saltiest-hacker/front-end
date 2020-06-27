import React, {useContext} from 'react';
import SaltyContext from '../context/saltyContext';

export default function Comment({comment}) {
    const {dispatch} = useContext(SaltyContext);
    return (
        <div>
        <div style={{color:"white", width:"70%",fontFamily:"Avenir", background:"rgba(170,170,170,.5)", padding:"1px 5px",borderRadius:"5px",margin:"15px auto"}}>
       <div style={{color:"white", padding:"0 0"}} className="card"> 
       <h4 style={{fontSize:"30px", textAlign:"left", fontWeight:"900"}}> <span style={{color:"rgba(220,20,60,9.5)",paddingLeft:"25px"}}> Author:  </span>Fake Author</h4>
    <h4 style={{textAlign:"left",padding:"0 20px", fontFamily:"arial", fontSize:"14px", paddingTop:"0"}}> <span style={{color:"#2b2b2b"}}>{comment.text}</span> </h4>
       <h4> saltiness score: <span style={{color:"rgba(220,20,60,9.5)"}}>100</span></h4>
       </div>
       <button onClick={() => dispatch({type: 'SET_CURRENT_COMMENT', payload: comment})}>Edit</button>
       <button>Delete</button>
       </div>
        </div>
    )
}