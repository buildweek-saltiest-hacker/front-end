import React, {useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";



 function SignUp (){
    const {register, errors } = useForm();
    const [signUp, setSignUp] = useState({
      username: "",
      password: ""
    });


    const handleChange = e => {
      setSignUp({...signUp, [e.target.name] : e.target.value})
 
   }

    const signUpCreds = (credentials) => {  axios.post("https://salty-hackers-ls.herokuapp.com/api/auth/register", credentials)
  .then(res => {
    localStorage.setItem("token", res.data.payload);
    // history();
      console.log(res);
  })  
  .catch(err =>
    console.error("bk: Login.js: login: err.message: ", err.message)
  );
 }



    const handleSubmit = e => {

      e.preventDefault();
      signUpCreds(signUp);


    }



    return (

        <div className="container">
        <header> 
                <h1> The Salty Hacker </h1>
    </header>
    {/* <nav>
        <ul>
            <Link to="/home"> <li> Home  </li> </Link>
            <Link to="/login"> <li> Log in</li> </Link>
            <Link to="/signup"> <li> Sign up</li> </Link>

        </ul>
    </nav> */}
=======
        <div>

        
      <div style={{display:"flex", justifyContent:"center"}}>
        <h1 style={{position:"absolute",paddingBottom:"70px", fontSize:"2.5rem"}}> Sign Up</h1>
  
        <form onSubmit={handleSubmit}>
          
    <input style={{ width:"120%", height:"30px",marginTop:"45%"}} onChange={handleChange} value={signUp.username} type="text" placeholder="Email" name="username" ref={register({required:"Email is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})} />
    {errors.email && <p> {errors.email.message}</p>}
  
    <input style={{ width:"120%", height:"30px",marginTop:"10%" }} onChange={handleChange} value={signUp.password} type="password" placeholder="Password" name="password"   ref={register({required:"Password is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})}/>
   {/* <Link to="/login"><h6> Already have an account? Click here to log in.</h6> </Link>  */}
  
    {errors.password && <p> {errors.password.message}</p>}
  <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>  <input type="submit" /></div>
       </form>
    </div>
      </div>
    )
  }

  export default SignUp