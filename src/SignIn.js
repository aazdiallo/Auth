import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import {AuthContext} from './Authenticate';
import app from './Fbase';

const SignIn = ({history}) => {
  const handleSignIn = useCallback(async event => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      history.push('/');  
    } catch (error) {
      alert('Sing In wasn\'t successful!!!');
    }
  }, [history]);

  const {currentUser} = useContext(AuthContext);
  if (currentUser)
    return <Redirect to='/' />;

  return (
    <div>
      <h3>Welcome to the sign in page</h3>
      <form onSubmit={handleSignIn}>
        <label>
          Email: <input name='email' type='email' placeholder='Enter Email' />
        </label><br/>
        <label>
          Password: <input name='password' type='password' placeholder='Enter Password' />
        </label>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default withRouter(SignIn);