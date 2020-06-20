import React from 'react';
import { useForm } from "react-hook-form";




function LogIn (){

    const {register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      console.log(data)
    }
    return (
<div>
   
      <div style={{display:"flex", justifyContent:"center"}}>
        <h1 style={{position:"absolute", paddingBottom:"30%",fontSize:"2.5em"}}> Sign in</h1>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          
        <input style={{ width:"120%", height:"30px",marginTop:"45%"}} type="text" placeholder="Email" name="email" ref={register({required:"Email is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})} />
    {errors.email && <p> {errors.email.message}</p>}
  
    <input style={{ width:"120%", height:"30px",marginTop:"10%" }}  type="password" placeholder="Password" name="password"   ref={register({required:"Email is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})}/>
   {/* <Link to="/signup"><h6> Don't have an account? Click here to sign up.</h6> </Link>  */}
  
    {errors.password && <p> {errors.password.message}</p>}
  <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>  <input type="submit" /></div>
       </form>
     </div>
      </div>
    )
  }

export default LogIn