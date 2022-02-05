const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.sendFile(`${__dirname}/views/index.html`)
})

app.listen(3001, ()=>{
  console.log('test 1 running on 3001');
})