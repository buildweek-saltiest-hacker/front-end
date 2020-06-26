import React from 'react';
import './App.css';
import { Link, Route, Switch} from  'react-router-dom';
import LogIn from './components/LogIn';
import SignUp  from './components/SignUp';
import User from './components/User';
import Display from './components/Display'
import Saved from './components/Saved'
import SaltyContent from './components/SaltyContent';

function App() {
  return (
    <div className="App">
    <header>
     <h1> The Salty Hacker </h1>
 </header>

 <nav className="w3-bar">
         <Link className="w3-bar-item w3-right w3-button w3-red w3-margin" to="/board"> Board</Link>
         <Link className="w3-bar-item w3-right w3-button w3-red w3-margin" to="/">Log in</Link>
         <Link className="w3-bar-item w3-right w3-button w3-red w3-margin" to="/signup">Sign up</Link>
         <a className="w3-bar-item w3-right w3-button w3-red w3-margin" href="https://the-salty-hacker-marketing.netlify.app/index.html">Home</a>

 </nav>

<Switch> 
   <Route exact path="/" component={LogIn} />
   <Route  path="/signup" component={SignUp}/> 
   <Route path="/board"> <Display /> </Route>
   <User path="/user" component={SaltyContent} />
</Switch>

    </div>
  );
}

export default App;
