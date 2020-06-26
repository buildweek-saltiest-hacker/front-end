import React, { useEffect, useState } from 'react';
import axios from 'axios'




function Display () {
    const [data, setData] = useState([]);
  



    useEffect(() => {
        axios.get("https://saltiest-hacker-json.herokuapp.com/recent") //get request to fetch recent comments data
        .then((response) => {
       console.log(response) // successfully logs fetched data to console 
          
           setData(response.data.data) // attmepting to set fetched data to state
 }) 
            .catch(error => {console.log(error)})
    },[])
    var newArray = Array.from(data) //attempt to change object to array
    console.log(newArray) // returns empty array
return (
    <div>
           <h1 style={{fontFamily:"Avenir",color:"rgba(220,20,60,9.5)"}}> Your Feed </h1>
         {newArray.map((i)=> {
            return (
             
              <Test  author={i.author} comment={i.comment} saltiness={i.saltiness} />
            )
        })} 
    </div>
)

}

const Test = props => {
    return (
        <div>
        <div style={{color:"white", width:"70%",fontFamily:"Avenir", background:"rgba(170,170,170,.5)", padding:"1px 5px",borderRadius:"5px",margin:"15px auto"}}>
       <div style={{color:"white", padding:"0 0"}} className="card"> 
       <h4 style={{fontSize:"30px", textAlign:"left", fontWeight:"900"}}> <span style={{color:"rgba(220,20,60,9.5)",paddingLeft:"25px"}}> Author:  </span>{props.author} </h4>
       <h4 style={{textAlign:"left",padding:"0 20px", fontFamily:"arial", fontSize:"14px", paddingTop:"0"}}> <span style={{color:"#2b2b2b"}}> {props.comment}</span> </h4>
       <h4> saltiness score: <span style={{color:"rgba(220,20,60,9.5)"}}>{props.saltiness}</span></h4>
       </div>
       </div>
        </div>
    )
}




export default Display

