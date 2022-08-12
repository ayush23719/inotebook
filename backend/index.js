const connectToMongo = require("./db");
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

//Availble Routes
app.use('/api/users', require('./routes/auth'))
app.use('/api/users', require('./routes/notes'))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
