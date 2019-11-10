import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {AuthProvider} from './Authenticate';
import Routes from './Routes';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes exact path='/' component={Home} />
          <Route  path='/signup' component={SignUp} />
          <Route  path='/signin' component={SignIn} />
        </div>
      </Router>
    </AuthProvider>
  ); 
}

export default App;
