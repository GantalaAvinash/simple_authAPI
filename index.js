import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import dotenv from 'dotenv'
dotenv.config()
import {UserRouter} from './routes/User.js'

const app = express()

app.use(bodyParser.json({
    limit: '30mb',
    extended: true
}))
app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true
}))
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/auth',UserRouter)


mongoose.connect(process.env.MONGOURL)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})