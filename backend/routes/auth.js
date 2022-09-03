const express = require('express')
const router = express.Router()
const User  - require('../models/User')
// Create a User using: POST "/api/auth"/ Doesn't require auth
router.get('/', (req, res) =>

    res.json([])
})

module.exports = router;