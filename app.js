const express = require('express')
const morgan = require('morgan')


// express app
const app = express()

// connect to mongoDB
const dbURI = 'mongodb+srv://Rodgers-Blog:Spainfab92@nodetuts.ehru1zt.mongodb.net/?retryWrites=true&w=majority'

// register view engines
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/',  (req, res) => {
  const blogs = [
    {title: 'Kev says something', snippet: 'Giggdy Giggdy Giggdy '},
    {title: 'Kev says something', snippet: 'Giggdy Giggdy Giggdy '},
    {title: 'Kev says something', snippet: 'Giggdy Giggdy Giggdy '}
  ]
  res.render('index', { title: "Home", blogs })
  })

app.get('/about',  (req, res) => {
  // res.send('<h1>About page</h1>')
  res.render('about', { title: "About" })
})

  // redirects
app.get('/blogs/create',  (req, res) => {
  res.render('create', { title: "Create-Blog" });
})

// 404 page
app.use((req, res) => {
  res.status(404).render( '404', { title: "404" })
})