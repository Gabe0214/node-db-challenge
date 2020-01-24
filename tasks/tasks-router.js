const router = require('express').Router()

const taskDB = require('./tasks-model')


router.get('/', (req, res) => {
    taskDB.find()
    .then( result => {
        // const { name, task_desc, id, notes, task_complete, description, project_id} = result[0]
        // const completedTask = task_complete ? true : false
        // const response = {id, task_desc, notes, task_complete: completedTask, project: {project_id, description}}
        const results = result.map(tasks => {
           if(tasks.task_complete == 0){
               const {name, task_desc, id, notes, task_complete, description, project_id} = tasks
               const response = {id, task_desc, notes, task_complete: false, project: {project_id, name, description}}
               return response
           } else {
            const {name, task_desc, id, notes, task_complete, description, project_id} = tasks
            const response = {id, task_desc, notes, task_complete: true, project: {project_id, name, description}}
            return response
           }
        })
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "sorry server down"})
    })

})

router.post('/', (req, res) => {
    taskDB.add(req.body)
    .then(result => {
        res.status(200).json(result)

    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error"})
    })
})


module.exports= router; 