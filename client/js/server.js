import http from 'http'
import { registerPath, loginPath, updateProfilePath } from './controllers/UserController.js'

// forego using framework like express until finished with vanilla js version of app

function handleDynamicRoute(req, res, pathname, expectedMethod, pattern, controller) {
  const match = pathname.match(pattern)
  if (match && req.method === expectedMethod) {
    const id = match[1]
    return controller(req, res, id)
  }
  return false
}


const handleRequest = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const pathname = url.pathname
  const method = req.method

  const routes = {
    '/api/users/register': { 'POST': registerPath },
    '/api/users/login': { 'POST': loginPath },
    '/api/users/update': { 'PUT': updateProfilePath }
  }

  if (handleDynamicRoute(req, res, pathname, 'PUT', /\/api\/users\/update\/([0-9]+)/, updateProfilePath)) {
    // dynamic routes below
  } else {
    // errors
  }

  if (routes[pathname] && routes[pathname][method]) {
    return routes[pathname][method](req, res)
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
}

const server = http.createServer(handleRequest)

const PORT = process.env.PORT || 6000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
