const express = require('express')
const app = express()

app.get('/',  (req, res) =>{
  res.send('Hola mundo')
})

app.get('/hola-mundo',  (req, res) => {
    res.send('Hola mundo no encuentra la ruta')
  })

app.listen(3000)