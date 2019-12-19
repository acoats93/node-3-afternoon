require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {create, getOne, getAll, update, delete_product} = require('./products_controller')

const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('database connected, boooiii!')
}).catch(err => console.log(err));
app.use(express.json())

app.post('/api/products', create);
app.get('/api/products', getAll);
app.get('/api/products/:id', getOne);
app.put('/api/products/:id', update);
app.delete('/api/products/:id', delete_product);


app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))