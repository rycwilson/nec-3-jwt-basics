import jwt from 'jsonwebtoken'
import { BadRequestError } from '../errors/index.js'

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new BadRequestError('Must provide username and password')
  }
  const id = 1234

  // don't put any sensitive data in the payload; also try to keep the payload small
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
  // console.log('token', token)
  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({ 
    msg: `Hello, ${req.user.username}`, 
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
  })
}

export { login, dashboard }