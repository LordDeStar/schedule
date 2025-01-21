const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("<h1>TEST</h1>")
});

app.listen(3500, 'localhost', ()=>{
    console.log('Server starts on http://localhost:3500');
});