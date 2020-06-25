import React from 'react';
import './App.css';
import { Link, Route, Switch} from  'react-router-dom';
import LogIn from './components/LogIn';
import SignUp  from './components/SignUp';
import User from './components/User';
import Display from './components/Display'
import SaltyContent from './components/SaltyContent';

function App() {
  return (
    <div className="App">
    <header>
     <h1> The Salty Hacker </h1>
 </header>
 <nav className="w3-bar">
         <Link className="w3-bar-item w3-right w3-button w3-red w3-margin" to="/display"> Display</Link>
         <Link className="w3-bar-item w3-right w3-button w3-red w3-margin" to="/login">Log in</Link>
         <Link className="w3-bar-item w3-right w3-button w3-red w3-margin" to="/signup">Sign up</Link>
         <a className="w3-bar-item w3-right w3-button w3-red w3-margin" href="https://the-salty-hacker-marketing.netlify.app/index.html">Home</a>

 </nav>

<Switch> 
   <Route path="/login" component={LogIn} />
   <Route  path="/signup" component={SignUp}/> 
   <Route path="/display"> <Display /> </Route>
   <User path="/user" component={SaltyContent} />
   
</Switch>

    </div>
  );
}

export default App;
