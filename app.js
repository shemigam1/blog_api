import express from "express"
import cors from 'cors'
import conn from "./src/database/connect.js"
import ErrorHandler from "./src/middleware/errorHandler.js"
import apiRouter from "./src/routes/index.js"
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', apiRouter)

app.use("**", (req, res) => {
    res.status(404).send("NOT FOUND")
})

app.use(ErrorHandler)

app.listen(port, async () => {
    await conn
    console.log(`listening on http://localhost:${port}`)
})