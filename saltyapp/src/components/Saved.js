import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';


function Saved () {

    const [users, setUsers] = useState([]);
     useEffect(() => {
        axiosWithAuth().get("https://salty-hackers-ls.herokuapp.com/api/actions/comment")
      .then( res => {
        // console.log(res)
        // setUsers(res)
      }) 
      .catch( error => {
          console.log("There was an error", error)
      })
    })
    return (
         <div>  
               <h1 style={{fontFamily:"Avenir",color:"rgba(220,20,60,9.5)"}}> Saved Comments </h1>         
  {/* {users.map((i)=> {
            return (
               <SavedComments commentdata={i.commentdata} id={i.commentid} />
            )
        })}
        */}

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

export default Saved;