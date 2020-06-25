import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { SaltyContext } from '../context/saltyContext';


const SaltyContent = () => {

    const updateContext = useContext(SaltyContext);
    

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