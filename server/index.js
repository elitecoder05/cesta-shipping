import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false)

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API routes will be added here' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
