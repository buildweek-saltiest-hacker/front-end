import React, {createContext, useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

 export const SaltyContext = createContext();

export const SaltyProvider = (props) => {

    const [value, setValue] = useState([]);
      
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
        <SaltyContext.Provider value={value}>
            {props.children}
        </SaltyContext.Provider>
    );
}

export default SaltyProvider;