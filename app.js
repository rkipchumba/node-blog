const express = require('express')

// express app
const app = express()

// register view engines
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000)

app.get('/',  (req, res) => {
    // res.send('<h1>Hello World</h1>')
    res.render('index')
  })

app.get('/about',  (req, res) => {
  // res.send('<h1>About page</h1>')
  res.render('about')
})

  // redirects
app.get('/blogs/create',  (req, res) => {
  res.render('create');
})

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', {root: __dirname})
})