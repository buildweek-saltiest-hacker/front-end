import React, {createContext, useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

 export const SaltyContext = createContext();

export const SaltyProvider = (props) => {

    const [value, setValue] = useState([]);

    useEffect(() => {

    //   axiosWithAuth()
    //   .get()
    //   .then()
    //   .catch()
        
    }, []);

    return (
        <SaltyContext.Provider value={value}>
            {props.children}
        </SaltyContext.Provider>
    );
}

export default SaltyProvider;