const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors()); 

//Mongodb connection

mongoose.connect('mongodb://localhost:3000/taskdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('connected to Mongodb');
}).catch(err=> {
    console.error('Mongodb connection error',err);
});

//Routes 
const taskRoutes = require('./routes/taskRoutes');
const { applyDefaults } = require('./models/task');
app.use('/api/tasks',taskRoutes);

//start the server
const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
