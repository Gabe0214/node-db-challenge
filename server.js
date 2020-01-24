const express = require('express')
const cors = require('cors')
const server = express()
const projectRoutes = require('./projects/projects-router')
const tasksRoutes = require('./tasks/tasks-router')
const resourcesRoutes = require('./resources/resources-route')
server.use(express.json())
server.use(cors())

server.use('/api/projects', projectRoutes)
server.use('/api/tasks', tasksRoutes)
server.use('/api/resources', resourcesRoutes)


module.exports = server;