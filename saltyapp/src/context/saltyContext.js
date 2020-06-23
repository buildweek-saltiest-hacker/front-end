import React, {createContext, useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

 export const SaltyContext = createContext();

export const SaltyProvider = (props) => {

    const [value, setValue] = useState([]);

    const [credentials, setCredentials] = useState([{
        username: "",
        password: ""
    }])
      
    useEffect(() => {

      axiosWithAuth()
      .get("http://salty-hackers-ls.herokuapp.com")
      .then(res =>{
          console.log(res);
          setValue(res)
      })
      .catch(err => console.error("ERROR", err))



        
    }, []);

    return (
        <SaltyContext.Provider value={[value, credentials, setCredentials]}>
            {props.children}
        </SaltyContext.Provider>
    );
}

export default SaltyProvider;