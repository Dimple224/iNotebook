const connectToMongo = require('./db');
// const cors = require('cors')

const express = require("express");
const app = express();
const port = 5000;

app.use(express.static('build'))

// app.use(require('cors')())
// app.use(cors())
app.use(express.json());//Middleware to handle api body

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port || 8000,()=>{
    console.log(`iNotebook backend listening at https://localhost:${port}`)
});
