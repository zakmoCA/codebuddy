import http from 'http'
import { registerUser, loginUser, updateUserProfile } from './controllers/UserController.js'

const handleRequest = (req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`)
    const pathname = url.pathname
    const method = req.method

    if (pathname === '/api/users/register' && method === 'POST') {
        registerUser(req, res)
    } else if (pathname === '/api/users/login' && method === 'POST') {
        loginUser(req, res)
    } else if (pathname.match(/\/api\/users\/\w+/) && method === 'PUT') {
        const userId = pathname.split('/')[3] 
        updateUserProfile(req, res, userId)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
}

const server = http.createServer(handleRequest)

const PORT = process.env.PORT || 6000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
