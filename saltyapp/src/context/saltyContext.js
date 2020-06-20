import React, {createContext, useEffect, useState} from 'react';
import Test from '../data/data';


 export const SaltyContext = createContext();

export const SaltyProvider = (props) => {

    const [value, setValue] = useState([]);
      
    

    
    useEffect(() => {


    //   axiosWithAuth()
    //   .get()
    //   .then()
    //   .catch()

    setValue(Test);

        
    }, []);

    return (
        <SaltyContext.Provider value={value}>
            {props.children}
        </SaltyContext.Provider>
    );
}

export default SaltyProvider;