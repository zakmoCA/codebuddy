import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('login')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (mode === 'register') {
      try {
        const response = await fetch('http://localhost:5173/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, username: email }) 
        })
        const data = await response.json()

        if(response.ok) {
          //
        } else {
          
          setError(data.message || 'Failed to register.')
        }
      } catch (error) {
        setError('Failed to register.')
      }
    } else {
      // Handle login
      try {
        const response = await fetch('http://localhost:5173/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        
        if(response.ok) {
          //
        } else {
          
          setError(data.message || 'Failed to login.')
        }
      } catch (error) {
        setError('Failed to login.')
      }
    }
  }
  
  

  const toggleMode = () => {
    setError('')
    setMode(mode === 'login' ? 'register' : 'login')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className='flex flex-col mt-10'>
        <input 
          type='email' 
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input 
          type='password' 
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
      <div>
        <p>{mode === 'login' ? 'New to Codebuddy?' : 'Already have an account?'}</p>
        <button type="button" onClick={toggleMode}>
          {mode === 'login' ? 'Sign up!' : 'Login'}
        </button>
      </div>
    </form>
  )
}

export default Login
