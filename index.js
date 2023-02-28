const express = require('express')
const cors = require('cors')

const port = 3001

const app = express()
app.use(cors())

app.get("/", function(req,res){
    res.send('ok')
})

app.get('/:imie/:nazwisko', function(req, res){
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko

    console.log(imie)
    console.log(nazwisko)

    res.send(imie+" "+nazwisko)
})

app.listen(port)