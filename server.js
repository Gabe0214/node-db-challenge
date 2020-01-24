const express = require('express')
const cors = require('cors')
const server = express()
const projectRoutes = require('./projects/projects-router')
server.use(express.json())
server.use(cors())

server.use('/api/projects', projectRoutes)


module.exports = server;