const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    obj = {
        name: 'John',
        age: 30
    }
    res.json(obj)
})

module.exports = router;