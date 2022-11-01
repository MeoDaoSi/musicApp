const router = require('express').Router();
const admin = require('../config/firebase.config');

router.get('/login', async (req, res) => {
    if(!req.headers.authorization){
        return res.status(500).send({Message : 'Invalid token1'});
    }
    const token = req.headers.authorization.split(' ')[1];
    // return res.send(admin.auth().verifyIdToken(token))
    try {
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (!decodeValue){
            return res.status(500).send({Message : 'Un Authorization'});
        }
    }catch (error) {
        return res.status(500).send({Message : 'Error111'});
    }
})

// router.get('/login', async (req, res) => {
//     if(!req.headers.authorization){
//         return res.status(500).send({Message : 'Invalid token1'});
//     }
//     const token = req.headers.authorization.split(' ')[1];
//     return res.status(200).send({token});
//     try {
//         const decodeValue = await admin.auth().verifyIdToken(token);
//         if (!decodeValue){
//             return res.status(500).send({Message : 'Un Authorization'});
//         }
//         return res.status(200).send({Message : 'Invalid token'});
//     } catch (error) {
//         return res.status(500).send({Message : 'Error111'});
//     }
// })

module.exports = router