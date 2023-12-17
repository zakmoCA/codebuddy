function createRegisterComponent(registerContainer) {
  registerContainer.innerHTML = `
      <h1>Register for an account</h1>
      <input type="text" class="register-field" id="register-username" placeholder="Enter username..." />
      <input type="email" class="register-field" id="register-email" placeholder="Enter email..." />
      <input type="password" class="register-field" id="register-password" placeholder="Enter password..." />
      <button class="register-field" id="register-button">Register</button>
  `
}

export default createRegisterComponent