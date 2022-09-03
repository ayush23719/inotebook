const connectToMongo = require("./db");
const express = require('express')
connectToMongo();
app.use(express.json())
const app = express()
const port = 3000

//Availble Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
