const router = require('express').Router();
const admin = require('../config/firebase.config');

router.get('/login', async (req, res) => {
    if(!req.headers.authorization){
        return res.status(500).send({Message : 'Invalid token'});
    }
    const token = req.headers.authorization.split(' ')[1];
    try {
        const decodeValue = await admin.auth();
        if (!decodeValue){
            return res.status(500).send({Message : 'Un Authorization'});
        }
        return res.status(200).send({Message : 'Invalid token'});
    } catch (error) {
        return res.status(500).send({Message : 'Error'});
    }
})

module.exports = router