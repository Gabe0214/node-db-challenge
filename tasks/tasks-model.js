const db = require('../dbConfig')


module.exports = {
find,
add
}


function find(){
    return db('tasks')
    .join('projects as p', 'p.id', 'tasks.project_id')
    .select('p.name', 'task_desc', 'tasks.id', 'tasks.notes', 'tasks.task_complete', 'p.description', 'tasks.project_id')

}

function add(tasks){
 return db('tasks').insert(tasks)
}