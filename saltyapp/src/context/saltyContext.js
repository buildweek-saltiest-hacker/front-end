import React, {createContext, useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

 export const SaltyContext = createContext();

export const SaltyProvider = (props) => {

  

    // These endpoints are to add a comment to the users saved comments list
// PUT, 'url.com/api/actions/comment/add' | DELETE, 'url.com/api/actions/comment/delete'

// Required data: commentid: 

const [updateData,  setUpdateData] = useState({
  username: "",
  commentid: ""
})


const [editData, setEditData] = useState(false);



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
        <SaltyContext.Provider value={{value, updateData, setUpdateData, editData, setEditData}}>
            {props.children}
        </SaltyContext.Provider>
    );
}

export default SaltyProvider;