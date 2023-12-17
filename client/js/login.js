import createRegisterComponent from '../components/login_components'

document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username')
  const passwordInput = document.getElementById('password')
  const loginButton = document.getElementById('login-button')
  const forgotPasswordLink = document.getElementById('forgot-password')
  const signupButton = document.getElementById('signup-button')
  const registerContainer = document.querySelector('.register-container')

  
  signupButton.addEventListener('click', () => {
    createRegisterComponent(registerContainer)

    // can only initialise below vars after component loaded
    const registerUsernameInput = document.getElementById('register-username')
    const registerEmailInput = document.getElementById('register-email')
    const registerPasswordInput = document.getElementById('register-password')
    const registerButton = document.getElementById('register-button')

    registerButton.addEventListener('click', registerUser)
  })
  loginButton.addEventListener('click', loginUser)
  forgotPasswordLink.addEventListener('click', updatePassword)
})



function registerUser() {
  const username = registerUsernameInput.value
  const email = registerEmailInput.value 
  const password = registerPasswordInput.value

  fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
  })
  .then(response => response.json())
  .then(data => {
      console.log(data)
      // handle reg
  })
  .catch(error => {
      console.error('Error:', error)
  })
}

function loginUser() {
  const username = usernameInput.value
  const password = passwordInput.value

  fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
      console.log(data)
      // login handler
  })
  .catch(error => {
      console.error('Error:', error)
  })
}


function updatePassword() {
  
}