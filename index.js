const http          = require('http'),
express             = require('express'),
formatMessage       = require('./utils/messages'),
UUser               = require('./utils/users')

const app           = express(),
server              = http.createServer(app),
socketio            = require('socket.io'),
io                  = socketio(server, {
    cors: {
        origin: '*',
    }
})

const botName       = 'Bot uangkerja.id'

io.on('connection', socket => {

    socket.on('joinRoom', ({ username, room }) => {

        const user = UUser.userJoin(socket.id, username, room)
        
        socket.join(user.room)

        socket.emit('message', formatMessage(botName, 'Welcome to online discuss by uangkerja.id!'))

        socket.broadcast.to(user.room).emit(
            'message',
            formatMessage(botName, `${user.username} has joined the chat`)
        )

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: UUser.getRoomUsers(user.room)
        })
    })

    socket.on('chatMessage', msg => {
        const user = UUser.getCurrentUser(socket.id)

        io.to(user.room).emit('message', formatMessage(user.username, msg))
    })

    socket.on('disconnect', () => {
        const user = UUser.userLeave(socket.id)

        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.username} has left the chat`)
            )

            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: UUser.getRoomUsers(user.room)
            })
        }
    })
})

app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 7000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))