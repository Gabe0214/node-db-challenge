const router = require('express').Router()

const projectDB = require('./projects-modal')



router.get('/', (req, res) => {
    projectDB.find()
        .then( result => {
        // const {id, name, description, completed } = result.map(project => {
        //     return project.name
        // })
        // const isComplete = completed ? true : false
        const results = result.map(project => {
            if(project.completed == 0){
                const { id, name, description, complete} = project
                return {id, name, description, complete: false}
            } else {
               const { id, name, description, complete} = project
               return {id, name, description, complete: true}
            }
       
    })
    res.status(200).json(results)
    })
    .catch(err => {
    res.status(500).json({message: "Something went wrong"})
    })
})
router.post('/', (req, res) => {
    projectDB.add(req.body)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Something went wrong with the server"})
    })
})

module.exports = router;