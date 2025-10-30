import 'dotenv/config'
import * as Path from 'node:path'
import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { expressjwt as jwt } from 'express-jwt'
import jwksRsa from 'jwks-rsa'
import { ParamsDictionary } from 'express-serve-static-core'
import { JwtPayload } from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: 'https://mako-2025-kaylin.au.auth0.com/.well-known/jwks.json',
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
  }),
  audience: 'https://travelai/api',
  issuer: 'https://mako-2025-kaylin.au.auth0.com/',
  algorithms: ['RS256'],
})

export interface JwtRequest<TReq = unknown, TRes = unknown>
  extends Request<ParamsDictionary, TRes, TReq> {
  auth?: JwtPayload
}

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
    const result = await model.generateContent([{ text: prompt }])
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
    const { destination, budget, length, departureLocation } = req.body
    if (!destination || !budget || !length) {
      return res
        .status(400)
        .json({ error: 'Missing destination, budget, or length in request' })
      console.log('Received body:', req.body)
    }

    const prompt = `Please find me a ${destination} to travel to with ${budget} for ${length} from ${departureLocation}
    Provide 1 sentence of why this destination is a good fit. 
    An example for mountain, no budget, weekend from Wellington is "Ohakune because it is drivable from Wellington and has great hiking trails in the mountains"`
    console.log('Prompt:', prompt)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const result = await model.generateContent([
      {
        text: prompt,
        // image:
      },
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

server.post('/api/v1/recommendations', checkJwt, async (req: JwtRequest, res: Response) => {
    const authReq = req as Request & { auth: { sub: string } }
    const userId = authReq.auth.sub
    const { text } = (req.body as { text: string })

     if (!req.auth?.sub) {
      res.sendStatus(StatusCodes.UNAUTHORIZED)
      return
    }
    console.log(`User ${userId} is saving:`, text)

    // TODO: Save to DB
    // try {
    // const user_id = req.auth.sub
    // // await db.syncUser(user_id)
    // //   const { name, nickname, released, image } = req.body
    // //   const id = await db.addPokemon({ name, nickname, released, user_id, image })
    // //   res
    // //     .setHeader('Location', `${req.baseUrl}/${id}`)
    // //     .sendStatus(StatusCodes.CREATED)
    // } catch (err) {
    //   next(err)
    // }

    res.json({ success: true })
  },
)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
