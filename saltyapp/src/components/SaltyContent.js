// import React, { useContext, useEffect } from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth';
// import { SaltyContext } from '../context/saltyContext';
// import Saved from '../components/Saved';



// const SaltyContent = (props) => {


       

//     useEffect(() => {

//         console.log(fakeDataContext)

//     })

//     const editComment = comment => {

//         editContext(true);
//         setEditContext(comment);
//     }



//    const saveEdit = e => {
//         e.preventDefault();
//     // const commentUpdate = updateContext.updateData;
//     //     axiosWithAuth().put(`https://saltiest-hacker-json.herokuapp.com/api/actions/comment/add/${commentUpdate.commentid}`, commentUpdate)
//     // .then(res => { 
//     const commentMap = valueContext.map(com => {
//       if(com.commentid === fakeDataContext.commentid){
//         return fakeDataContext;
//       }else {return com;}
//     })
//     setValueContext(commentMap)
//     console.log(commentMap)
    
//     // })
//     // .catch(err => console.error("ERROR", err.message))
//       };
    
      
      
      
//    const deleteComment = comment => {
//     //     axiosWithAuth().delete(`https://saltiest-hacker-json.herokuapp.com/api/actions/comment/delete/${commentUpdate.commentid}`)
//     // .then(res => {
//              const commentFilter = fakeDataContext.filter((com) => {
//        return com.commentid !== comment.commentid;
//       })
//       setUpdateDataContext(commentFilter);
//       console.log(commentFilter);
//     // })
//     // .catch(err => console.error("ERROR", err.message))
//       };
   

      



//     return (
              
//               <div style={{border:"1px solid black", width:"50%", margin:"0 auto"}} className="commentCard">
//              <h3>Saved Comments</h3>
//          {fakeDataContext.map((item) => { return (
//          <form key={item.commentid} onSubmit={saveEdit}>
       
//          <div className="psuedoCode" style={{border:"1px solid black", width:"50%", margin:"0 auto"}}>
//          <label>
//              <h3>Comment Editor:</h3>
//          <input className="w3-small"
//          value={updateDataContext.comment}
//          onChange={e =>
//             updateContext.setUpdateData({
//                 ...fakeDataContext, 
//                comment: e.target.value
//             })
//             }/> 
//           </label>
//             <h4   onClick={() => editComment()}>{item.item}</h4>
//             <h3 > {item.comment} </h3>
//             <button style={{background:"red"}}  onClick={e => {
//                 e.stopPropagation();
//                 deleteComment(item.comment);
//             }}> <h6 > Delete</h6> </button> 
//                   <button style={{background:"red"}} type="Submit" > <h6 > Save  </h6> </button>

//             </div>
//          </form>
//         ) })}
//         </div>
//     )


   
// }





// export default SaltyContent;