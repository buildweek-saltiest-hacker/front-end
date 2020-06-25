import React, { useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { SaltyContext } from '../context/saltyContext';



const SaltyContent = () => {

    const updateContext = useContext(SaltyContext);
    

    const editComment = comment => {

        updateContext.editData(true);
        updateContext.setEditData(comment);
    }



    const saveEdit = e => {
        e.preventDefault();
    
    const commentUpdate = updateContext.updateData;
    

        axiosWithAuth().put(`url.com/api/actions/comment/add/${commentUpdate.commentid}`, commentUpdate)
    .then(res => {
        
    const commentMap = commentUpdate.map(com => {
      if(com.commentid === commentUpdate.commentid){
        return res.data.data;
      }else {return com;}
    })
    updateContext.setUpdateData(commentMap)
    
    })
    .catch(err => console.error("ERROR", err.message))
      };
    
      
      
      
      const deleteComment = comment => {
        // make a delete request to delete this color
         
    
        axiosWithAuth().delete(`url.com/api/actions/comment/delete/${comment.commentid}`)
    .then(res => {
     
      console.log(res);
    
     const commentFilter = comment.filter((com) => {
       return com.commentid !== comment.commentid;
      })
      updateContext.setUpdateData(commentFilter);
     
    })
    .catch(err => console.error("ERROR", err.message))
      };
    


    return (
        <div>

        </div>
    )

}

export default SaltyContent;

// function Saved () {
//     // const [users, setUsers] = useState([]);
//     //  useEffect(() => {
//     //     axios.get("https://salty-hackers-ls.herokuapp.com/api/actions/comment")
//     //   .then( response => {
//     //     console.log(response)
//     //     setUsers(response)
//     //   }) 
//     //   .catch( error => {
//     //       console.log("There was an error", error)
//     //   })
//     // })
//     return (
//         <div>           
// {/* {users.map((items) => <div> <SavedComments comments={items.username} auther={items.commentid} /></div>)} */}
//         </div>
//     )
// }
// var newVar = Array.from(datalist)
//  const SavedComments = props => {
//      return (
//          <div>
//              <h1> Saved List </h1>
//             {/* <h3>{props.comments} </h3>
//             <h3>{props.author}</h3> */}
//   <h3> {fakedata.comment1}</h3>
//   <button> Delete </button>
//          </div>
//      )
//  }
// // axios.delete("https://salty-hackers-ls.herokuapp.com/api/actions/comment/delete", { data})
// //           .then(response => response.data)
// //           console.log("success")
// //           .catch((error) => {
// //             throw error.response.data
// //             console.log(error, "There was an error")
// //           })
// export default Saved