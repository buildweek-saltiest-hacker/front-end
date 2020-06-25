import React, {createContext, useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

 export const SaltyContext = createContext();

export const SaltyProvider = (props) => {

    const initialData = {
        username: "",
        commentid: ""
    }

    // These endpoints are to add a comment to the users saved comments list
// PUT, 'url.com/api/actions/comment/add' | DELETE, 'url.com/api/actions/comment/delete'

// Required data: commentid: 

const [updateData,  setUpdateData] = useState({
  username: "example_username",
  commentid: "example_savedcommentid"
})


const [editData, setEditData] = useState(initialData)



    const [value, setValue] = useState([]);
      
    useEffect(() => {

      axiosWithAuth()
      .get("https://salty-hackers-ls.herokuapp.com")
      .then(res =>{
          console.log(res);
          setValue(res)
      })
      .catch(err => console.error("ERROR", err))

    }, []);

    return (
        <SaltyContext.Provider value={{value, updateData, setUpdateData, editData, setEditData, initialData}}>
            {props.children}
        </SaltyContext.Provider>
    );
}

export default SaltyProvider;