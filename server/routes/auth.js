const router = require('express').Router();

router.get('/login', (req, res) => {
    return res.json('login');
})

module.exports = router