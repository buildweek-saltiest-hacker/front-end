import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './SignUp'
import LogIn from './LogIn'

function Home () {
    return (
 <div className="container">
<header>
<title> Home </title>
        <h1> The Salty Hacker </h1>
    </header>
    <nav>
        <ul>
            <Link to="/home"> <li> Home  </li> </Link>
            <Link to="/login"> <li> Log in</li> </Link>
            <Link to="/signup"> <li> Sign up</li> </Link>

        </ul>
    </nav>

 <h2>Welcome to Salty App. Please make a selection from the menu to get started </h2>
 
        </div>
    )
}

export default Home