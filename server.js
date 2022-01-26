const express = require('express');
const sequelize = require('./config/connection');

const routes = require('./routes');
const path = require ('path');

const app = express();

const User = require('./models/User');
const Product = require('./models/Products');

const PORT = process.env.PORT || 5252;

app.use (express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

sequelize.sync({force:true}).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`helloooo!!! it's workin ${PORT}`);
  });
});


