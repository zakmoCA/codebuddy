import { registerUser, loginUser, updateProfile } from '../client/js/login'

//--------------/api/users/register-----------------------
function registerPath(req, res) {
  let body = ''

  req.on('data', chunk => {
      body += chunk.toString()
  })

  req.on('end', () => {
      const userData = JSON.parse(body)

      User.create(userData)
      .then(user => {
          res.writeHead(201, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'User registered successfully' }))
      })
      .catch(error => {
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'Internal Server Error' }))
      })
  })
}

//--------------------/api/users/login------------------------
function loginPath(req, res) {
  let body = ''

  req.on('data', chunk => {
      body += chunk.toString()
  })

  req.on('end', () => {
      const credentials = JSON.parse(body)

      User.findOne({ where: { username: credentials.username } })
      .then(user => {
          if (user && user.password === credentials.password) { 
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ message: 'User logged in successfully' }))
          } else {
              res.writeHead(401, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ message: 'Invalid credentials' }))
          }
      })
      .catch(error => {
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'Internal Server Error' }))
      })
  })
}


//----/api/users/update
function updateProfilePath(req, res, userId) {
  let body = ''

  req.on('data', chunk => {
      body += chunk.toString()
  })

  req.on('end', () => {
      const updatedData = JSON.parse(body)

      // do updat profile logic soon

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Your profile updated successfully!' }))
  })
}

