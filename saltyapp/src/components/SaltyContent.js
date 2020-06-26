import React, { useContext, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { SaltyContext } from '../context/saltyContext';
import Saved from '../components/Saved';



const SaltyContent = (props) => {

    const updateContext = useContext(SaltyContext);
        let fakeData = ["Fake comment1", " Fake comment2", "Fake comment3"]

    useEffect(() => {

        console.log(updateContext.value)

    })

    const editComment = comment => {

        updateContext.editData(true);
        updateContext.setEditData(comment);
    }



   const saveEdit = e => {
        e.preventDefault();
    const commentUpdate = updateContext.updateData;
        axiosWithAuth().put(`https://saltiest-hacker-json.herokuapp.com/api/actions/comment/add/${commentUpdate.commentid}`, commentUpdate)
    .then(res => { 
    const commentMap = commentUpdate.map(com => {
      if(com.commentid === commentUpdate.commentid){
        return res.data;
      }else {return com;}
    })
    commentUpdate.setUpdateData(commentMap)
    console.log(commentMap)
    
    })
    .catch(err => console.error("ERROR", err.message))
      };
    
      
      
      
   const deleteComment = comment => {
        const commentUpdate = updateContext.updateData;
        axiosWithAuth().delete(`https://saltiest-hacker-json.herokuapp.com/api/actions/comment/delete/${commentUpdate.commentid}`)
    .then(res => {
             const commentFilter = comment.filter((com) => {
       return com.commentid !== comment.commentid;
      })
      commentUpdate.setUpdateData(commentFilter);
     console.log()
    })
    .catch(err => console.error("ERROR", err.message))
      };
   

      
      const SavedComments = props => {
   

        return (
             
             <div style={{border:"1px solid black", width:"50%", margin:"0 auto"}} className="commentCard">
               <form onSubmit={saveEdit}>
                <h3>{props.id} </h3>
                <h3>{props.commentdata}</h3>
                <button style={{background:"red"}} onClick={() => editComment(props.comment)} > <h6> Save  </h6> </button>
                </form>
    {/* Placeholder code  */}
        <div className="psuedoCode" style={{border:"1px solid black", width:"50%", margin:"0 auto"}}>
            <h4>{props.item} </h4>
            <button style={{background:"red"}}  onClick={e => {
                e.stopPropagation();
                deleteComment(props.comment);
            }}> <h6 > Delete</h6> </button> 
            </div>
            {/* Placeholder code */}
         </div>
         )
     }



    return (
       <div>
         {fakeData.map((item, index) => { return (
         <h1 key={index}> <SavedComments item={item} /></h1>
        ) })}
        </div>
    )


   
}





export default SaltyContent;