console.clear();

/* package */
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server)
const path = require('path');

/* settings */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/* ejs */
app.use(expressLayouts)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'))
app.set('layout',  path.join(__dirname + '/views/layouts/main'))

/* routes */
const rooms = {}

app.get('/', (req,res) => {
  res.render('index')
})

app.get('/crearSala', (req,res) => {
  res.render('crearSala')
})

app.post('/crearSala', (req,res) => {
  res.json({ok:true, id: 1})
})

app.get('/sala', (req,res) => {
  res.render('sala',{id: req.query.id})
})

/* socket */
io.on('connection', socket => {


})

/* listtener */
server.listen('3000', () => {
  console.log('http://localhost:3000');
})