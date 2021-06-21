import express from 'express'
import { createCourse } from './routes'

const app = express()

app.get('/', createCourse)

app.listen(3333)

// '🚀️ Server is running! 🔥️'