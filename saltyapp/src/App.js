import React from 'react';
import './App.css';
import TestingData from './components/test';
import { Link, Route, BrowserRouter} from  'react-router-dom'
import LogIn from './components/LogIn';
import SignUp  from './components/SignUp'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <header>
     <h1> The Salty Hacker </h1>
 </header>
 <nav>
     <ul>
         <Link to="/home"> <li> Home  </li> </Link>
         <Link to="/login"> <li> Log in</li> </Link>
         <Link to="/signup"> <li> Sign up</li> </Link>

     </ul>
 </nav>

 <TestingData/>
    <BrowserRouter>
    <Route exact path="/home"> <Home /> </Route>
   <Route exact path="/login"> <LogIn /> </Route>
   <Route exact path="/signup"> <SignUp/> </Route>
</BrowserRouter>

    </div>
  );
}

export default App;
