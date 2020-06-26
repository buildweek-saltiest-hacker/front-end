import React, { useEffect, useState } from 'react';
import axios from 'axios'


function Saved () {
    var fakeData = ["Fake comment1", " Fake comment2", "Fake comment3"]
    const [users, setUsers] = useState([]);
     useEffect(() => {
        axios.get("https://salty-hackers-ls.herokuapp.com/api/actions/comment")
      .then( response => {
        console.log(response)
        setUsers(response)
      }) 
      .catch( error => {
          console.log("There was an error", error)
      })
    })
    return (
         <div>  
               <h1 style={{fontFamily:"Avenir",color:"rgba(220,20,60,9.5)"}}> Saved Comments </h1>         
  {users.map((i)=> {
            return (
               <SavedComments  commentdata={i.commentdata} id={i.commentid} />
            )
        })}
        {fakeData.map((item) => { return (
         <h1> <SavedComments item={item} /></h1>
        ) })}

        </div>
    )
}
 const SavedComments = props => {
   

    return (
         
         <div style={{border:"1px solid black", width:"50%", margin:"0 auto"}} className="commentCard">
            <h3>{props.id} </h3>
            <h3>{props.commentdata}</h3>
            <button style={{background:"red"}} > <h6> Delete  </h6> </button>

{/* Placeholder code  */}
    <div className="psuedoCode" style={{border:"1px solid black", width:"50%", margin:"0 auto"}}>
        <h4>{props.item} </h4>
        <button style={{background:"red"}}> <h6 > Delete</h6> </button> 
        </div>
        {/* Placeholder code */}
     </div>
     )
 }


// axios.delete("https://salty-hackers-ls.herokuapp.com/api/actions/comment/delete", { data})
//           .then(response => response.data)
//           console.log("success")
//           .catch((error) => {
//             throw error.response.data
//             console.log(error, "There was an error")
//           })

export default Saved