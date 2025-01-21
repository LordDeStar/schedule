const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("<h1>TEST</h1>")
});

app.post('/auth', async (req, res)=>{
    const {login, password} = req.body;
    let user = await client.student.findFirst({
        where:{
            id_student: 1
        }
    });
    res.json(user);
})

app.listen(3500, 'localhost', ()=>{
    console.log('Server starts on http://localhost:3500');
});