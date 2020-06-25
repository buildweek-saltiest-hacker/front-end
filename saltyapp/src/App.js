import React from 'react';
import './App.css';
import { Link, Route, Switch} from  'react-router-dom';
import LogIn from './components/LogIn';
import SignUp  from './components/SignUp';
import Home from './components/Home';
import User from './components/User';
import Display from './components/Display'
import SaltyContent from './components/SaltyContent';

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
         <Link to="/display"> <li> Display</li> </Link>

     </ul>
 </nav>

<Switch> 
    <Route exact path="/home" component={Home} /> 
   <Route path="/login" component={LogIn} />
   <Route  path="/signup" component={SignUp}/> 
   <Route path="/display"> <Display /> </Route>
   <User path="/user" component={SaltyContent} />
   
</Switch>

    </div>
  );
}

export default App;
