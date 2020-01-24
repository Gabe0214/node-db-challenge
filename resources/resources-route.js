const router = require('express').Router()


const resourcesDB = require('./resources-modal')

router.get('/', (req, res) => {
resourcesDB.find()
.then( result => {
    res.status(200).json(result)
})
.catch( err => {
    console.log(err)
    res.status(500).json({message: "sorry server went down"})
})
})


router.post('/', (req, res) => {
    resourcesDB.add(req.body)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error with server "})
    })
})

module.exports = router; 