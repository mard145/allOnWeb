require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT
const socketIO = require('socket.io')
const UserRoutes = require('./routes/userRoutes')
const AdminRouter = require('./routes/adminRoute')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODBURI, {useNewUrlParser:true, useUnifiedTopology:true})

let db = mongoose.connection
db.on("error", ()=> { console.log('Houve um erro') })
db.once("open", ()=> { console.log('banco carregado') })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', UserRoutes, AdminRouter)

const server = app.listen(PORT, ()=>{
    console.log('server running on port', PORT)
})

const messages = []
const io = socketIO(server)

io.on('connection', (socket)=>{
    console.log('new connection')
    socket.emit('updateMessages', messages)

    socket.on('newMessage', (data)=>{
    messages.push(data)
    io.emit('updateMessages', messages)
   })
})

