const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const connectionString = 'postgres://dwtwxsktdfttqb:1fe3bd107add2659d23833c5618ea8713e50d7b5e106ad9a252a7bb850bca566@ec2-54-235-76-111.compute-1.amazonaws.com:5432/d4nedsonlfpaev?ssl=true';


const app = express();

app.use(bodyParser.json());
const port = 3000;

app.get('/api/shelf/:id', (req, res) => {
  res.send('massive-demo');
});

app.get('/api/bin/:id', (req, res) => {
  res.send([]);
});

app.put('/api/bin/:id', (req, res) => {
  res.send([]);
});

app.post('/api/bin/:id', (req, res) => {
  res.send({ id: 123 });
});

app.delete('/api/bin/:id', (req, res) => {
  res.send({ id: 123 });
});

massive(connectionString).then(db => {
  app.set('db', db)
  app.listen(port, () => {
    console.log('Started server on port', port);
  });
});