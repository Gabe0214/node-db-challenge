const db = require('../dbConfig')



module.exports = {
    // names of database functions 
  add,
  find
    
}

function find(){
    return db('projects').select('*')
}

function add(project){
    return db('projects').insert(project)
}