import express from 'express'
import { login, dashboard } from '../controllers/main.js'
import authenticate from '../middleware/auth.js'

const router = express.Router()

router.route('/login').post(login)
router.route('/dashboard').get(authenticate, dashboard)

export default router