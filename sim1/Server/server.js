const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const taskCtrl = require('./Controller/taskController')

//create our server
const app = new express();
const port = 4000;
//apply middleware
app.use(cors());
app.use(bodyParser.json());

//end points

//app.get, 
app.get('/api/get', taskCtrl.getProduct);
//app.post
app.post('/api/create', taskCtrl.saveProduct);
//app.update
app.put('/api/update/:id', taskCtrl.update);
//app.delete
app.delete('/api/delete/:id', taskCtrl.delete);

//make server listener
app.listen(port, ()=>{
    console.log(`I'm listening on port ${port}`);
  });