const express = require('express');
const cors = require('cors');
const router = require('./routes/user.routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", router)

app.get('/', (req, res)=>{
    res.send("<h1>IT IS ALIVE</h1>")
});

app.listen(3500, ()=>{
    console.log('Server starts on http://localhost:3500');
});