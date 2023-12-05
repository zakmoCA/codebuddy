function registerUser(req, res) {
  let body = ''

  req.on('data', chunk => {
      body += chunk.toString()
  })

  req.on('end', () => {
      const userData = JSON.parse(body)

      // registration logic

      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'User registered successfully' }))
  })
}


function loginUser(req, res) {
  let body = ''

  req.on('data', chunk => {
      body += chunk.toString()
  })

  req.on('end', () => {
      const credentials = JSON.parse(body)

      // do login logic soon

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'User logged in successfully' }))
  })
}


function updateUserProfile(req, res, userId) {
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

