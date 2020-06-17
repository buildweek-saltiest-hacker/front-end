import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

 export const SaltyContext = createContext();

export const SaltyProvider = (props) => {

    const [value, setValue] = useState([]);

    useEffect(() => {

    //   axios
    //   .get()
    //   .then()
    //   .caught()
        
    }, []);

    return (
        <SaltyContext.Provider value={value}>
            {props.children}
        </SaltyContext.Provider>
    );
}

export default SaltyProvider;