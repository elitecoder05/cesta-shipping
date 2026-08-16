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

const products = [
  {
    id: '1',
    name: 'Sample Product 1',
    description: 'This is a description for sample product 1.',
    price: 100,
    imageUrl: 'https://via.placeholder.com/150',
    timeLeft: '17 Hr 49 Min 00 Sec',
    location: 'Bangalore',
    condition: 'Not Tested',
  },
  {
    id: '2',
    name: 'Sample Product 2',
    description: 'This is a description for sample product 2.',
    price: 200,
    imageUrl: 'https://via.placeholder.com/150',
    timeLeft: '18 Hr 30 Min 00 Sec',
    location: 'Delhi',
    condition: 'Good',
  },
  {
    id: '3',
    name: 'Sample Product 3',
    description: 'This is a description for sample product 3.',
    price: 150,
    imageUrl: 'https://via.placeholder.com/150',
    timeLeft: '16 Hr 00 Min 00 Sec',
    location: 'Mumbai',
    condition: 'Mixed',
  },
]

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API routes will be added here' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
