require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('please login at chai aur code')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

