import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
        <input type='email' placeholder='Enter your email'></input>
        <input type='password' placeholder='Enter your password'></input>
      </div>
      <button>Login</button>
      <div>
        <p>new to codebuddy?</p>
        <button>Sign up!</button>
      </div>
    </div>
  )
}

export default Login