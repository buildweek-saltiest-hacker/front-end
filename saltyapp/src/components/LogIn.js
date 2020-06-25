import React, {useState} from 'react';
// import {SaltyContext} from '../context/saltyContext';
// import {useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';



function LogIn (){

    const {register, errors } = useForm();
    // const {credentials, setCredentials} = useContext(SaltyContext);
    const [user, setUser] = useState({
      username:"",
      password: ""
    });
   
    const handleChange = e => {
     setUser({...user, [e.target.name] : e.target.value})

  }


  const handleSubmit = e => {
    e.preventDefault();
    // console.log(user);
    // setCredentials(user);
    // console.log(credentials);
    loginCreds(user);


  }

  // const history = () => {
  // let history = useHistory();
  // history.push("/user");
  // }

  const loginCreds = (credentials) => {  axios.post("https://salty-hackers-ls.herokuapp.com/api/auth/login", credentials)
  .then(res => {
    localStorage.setItem("token", res.data.payload);
    // history();
      console.log(res);
  })  
  .catch(err =>
    console.error("bk: Login.js: login: err.message: ", err.message)
  );
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
        <h1 style={{position:"absolute", paddingBottom:"30%",fontSize:"2.5em"}}> Sign in</h1>
  
        <form onSubmit={handleSubmit}>
          
        <input style={{ width:"120%", height:"30px",marginTop:"45%"}} onChange={handleChange} value={user.username} type="text" placeholder="Email" name="username" ref={register({required:"username is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})} />
    {errors.email && <p> {errors.email.message}</p>}
  
    <input style={{ width:"120%", height:"30px",marginTop:"10%" }} onChange={handleChange} value={user.password}  type="password" placeholder="Password" name="password"   ref={register({required:"Password is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})}/>
   {/* <Link to="/signup"><h6> Don't have an account? Click here to sign up.</h6> </Link>  */}
  
    {errors.password && <p> {errors.password.message}</p>}
  <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>  <input type="submit" /></div>
       </form>
     </div>
      </div>
    )
  }

export default LogIn