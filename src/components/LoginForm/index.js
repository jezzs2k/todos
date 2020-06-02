import React from 'react';
import './loginForm.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div className='login'>
        <h2>Sign In</h2>
        <form>
          <div className='form-group'>
            <label for='username'>Username</label>
            <input
              className='form-control'
              id='username'
              type='username'
              name='username'
            />
          </div>
          <div className='form-group'>
            <label for='password'>Password</label>
            <input
              className='form-control'
              id='password'
              type='password'
              name='password'
            />
          </div>
          <button className='btn-login'> SignIn </button>
          <div className='form-group checkbox'>
            <input
              id='checkbox'
              type='checkbox'
              style={{ marginRight: '10px' }}
              name='checkbox'
            />
            <label for='checkbox'>Keep me to signed in</label>
          </div>
        </form>
        <a href='/#' className='forgotPass'>
          {' '}
          Forgot password ?
        </a>
      </div>
    );
  }
}

export default LoginForm;
