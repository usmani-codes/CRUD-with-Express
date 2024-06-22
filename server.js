import express from 'express'

import posts from './routes/posts.js'
import notFound from './middlewares/notFound.js'
import logger from './middlewares/logger.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 3000

//middlewares
// app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger)


//routes
app.use('/api/v1/posts', posts)

// middilewares
app.use(notFound)
app.use(errorHandler)

//server listening
app.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`))


