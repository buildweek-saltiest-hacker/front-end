import React, {useState, useContext} from 'react';
import {SaltyContext} from '../context/saltyContext';
import { useForm } from "react-hook-form";
import axios from 'axios';



function LogIn (){

    const {register, handleSubmit, errors } = useForm();
    const [credentials, setCredentials] = useContext(SaltyContext);
    const [userName, setUsername] = useState([]);
    const [password, setPassword]= useState([]);
   
    const onSubmit = e => {
      e.preventDefault();

     setCredentials( user => [...user, {username: userName, password: password}])
    }


const updateUser = (e) => {
setUsername(e.target.value)

}

const updatePassword = (e) => {
  setPassword(e.target.value)

}


    axios.post("https://salty-hackers-ls.herokuapp.com/api/auth/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
        this.props.history.push("/user");
        console.log(res);
    })  
    .catch(err =>
      console.error("bk: Login.js: login: err.message: ", err.message)
    );
    


    return (
<div>
   
      <div style={{display:"flex", justifyContent:"center"}}>
        <h1 style={{position:"absolute", paddingBottom:"30%",fontSize:"2.5em"}}> Sign in</h1>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          
        <input style={{ width:"120%", height:"30px",marginTop:"45%"}} onChange={updateUser} value={userName} type="text" placeholder="Email" name="email" ref={register({required:"Email is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})} />
    {errors.email && <p> {errors.email.message}</p>}
  
    <input style={{ width:"120%", height:"30px",marginTop:"10%" }} onChange={updatePassword} value={password}  type="password" placeholder="Password" name="password"   ref={register({required:"Password is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})}/>
   {/* <Link to="/signup"><h6> Don't have an account? Click here to sign up.</h6> </Link>  */}
  
    {errors.password && <p> {errors.password.message}</p>}
  <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>  <input type="submit" /></div>
       </form>
     </div>
      </div>
    )
  }

export default LogIn