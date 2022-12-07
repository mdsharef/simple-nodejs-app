const express = require("express");
const morgan = require("morgan");

const contactRouters = require("./contactRouters");


const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/contacts', contactRouters);

app.get('*', (req, res) => {
    res.send('<h1>Please Use the correct Routes</h1>');
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})