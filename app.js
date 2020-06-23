const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');



app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(routes)


// app.get('/', (req, res)=>{
//   res.send('hello world');
// })

const port = process.env.PORT || 4000;
app.listen( port, ()=>console.log(`Server Started On Port ${port}`) );