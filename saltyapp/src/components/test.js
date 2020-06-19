import React, {useContext} from 'react';
import {SaltyContext} from '../context/saltyContext';

const TestingData = () => {
    const testData = useContext(SaltyContext)

    console.log(testData);

    return (

        <div>{testData.map(t => {
       return ( 
       <>   
        <p>{t.test1}</p>
       <p>{t.test2.testing1}</p>
       <p>{t.test2.testing2}</p>
       </>
    ) })}
        </div>

    )
 }

 export default TestingData;