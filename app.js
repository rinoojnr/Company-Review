const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');


const app = express();
const router = require('./routes/company');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(router);


sequelize.sync()
.then((response)=>{
    app.listen(3000)
})
.catch(err=>console.log(err))
