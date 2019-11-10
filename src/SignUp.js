import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import app from './Fbase';

const SignUp = ({history}) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        
        app.auth().onAuthStateChanged(function(currentUser){
          currentUser.sendEmailVerification();
        })
        app.auth().onAuthStateChanged(function (user) {
          if (user.emailVerified) {
            history.push('/');  
            console.log('Email is verified');
          } else {
            console.log('Email is not verified');
          }
        });
    } 
    catch (error) {
      alert('Sing Up wasn\'t successful!!!');
    }
  }, [history]);

  return (
    <div>
      <h3>Welcome to the signup page</h3>
      <form onSubmit={handleSignUp}>
        <label>
          Email: <input name='email' type='email' placeholder='Enter Email' />
        </label>
        <label>
          Password: <input name='password' type='password' placeholder='Enter Password' />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default withRouter(SignUp);