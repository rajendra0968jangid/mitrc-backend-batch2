import express from 'express'
const app = express()
import {dbConnect} from './config/db.js'
import 'dotenv/config'
const port =  process.env.PORT || 3000

dbConnect();

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
