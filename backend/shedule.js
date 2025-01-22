const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const userRoutes = require('./routes/user.routes.js');
const scheduleRoutes = require('./routes/schedule.routes.js');
const cabinetRoutes = require('./routes/cabinet.routes.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.raw({ type: 'application/octet-stream', limit: '10mb' }));

app.use("/users", userRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/cabinet", cabinetRoutes);


app.listen(3500, ()=>{
    console.log('Server starts on http://localhost:3500');
});