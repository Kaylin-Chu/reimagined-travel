import 'dotenv/config'
import * as Path from 'node:path'
import express from 'express'
import cors from 'cors'
import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) {
  throw new Error('GEMINI_API_KEY environment variable is not set')
}
const genAI = new GoogleGenerativeAI(apiKey)
const server = express()

server.use(express.json())
server.use(cors())

server.get('/api/v1/holiday', async (req, res) => {
 try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Gemini API key not configured' })
    }
     const prompt = 'What destination should I visit?'

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const result = await model.generateContent([
      { text: prompt }
    ])
    const holiday =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text ??
      'Sorry, I could not generate a destination at this time.'

    res.json({ holiday })
  } catch (error) {
    console.error('Error generating joke:', error)
    res.status(500).json({ error: 'Error generating joke' })
  }
})

server.post('/api/v1/holiday', async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Gemini API key not configured' })
    }
    const { destination, budget, length } = req.body
    if (!destination || !budget || !length) {
      return res
        .status(400)
        .json({ error: 'Missing destination, budget, or length in request' })
    }

    const prompt = `Suggest a travel destination based on the following criteria:
    Destination: ${destination}
    Budget: ${budget}
    Length: ${length}
    Provide a brief description of why this destination is a good fit.`

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const result = await model.generateContent([
      { text: prompt }
    ])
    const holiday =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text ??
      'Sorry, I could not generate a destination at this time.'

    res.json({ holiday })
  } catch (error) {
    console.error('Error generating holiday:', error)
    res.status(500).json({ error: 'Error generating holiday' })
  }
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
