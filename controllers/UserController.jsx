import bcrypt from 'bcrypt'
import express from 'express'
import User from '../models/user'
import Jwt from 'jsonwebtoken'

const app = express()
const jwt = Jwt()

// register
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    })

    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


// login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (user && (await bcrypt.compare(password, user.password))) {

      const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' })
      res.json({ message: "Logged in", token })
    } else {
      res.status(400).json({ message: "Invalid credentials" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
