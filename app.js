require('dotenv').config()
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;


// Handlebars

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

// Servir Contenido Estatico

app.use( express.static('public'));


// Middleware
app.get('/', (req, res) => {
  res.render('home', {
    name: 'Samuel Arteaga',
    tittle: 'Practica Express'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Samuel Arteaga',
    tittle: 'Practica Express'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Samuel Arteaga',
    tittle: 'Practica Express'
  });
})


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})