let app = require('express')()
let server = require('http').Server(app)
let io = require('socket.io')(server)

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.get('/style.css', (req, res) => res.sendFile(__dirname + '/style.css'))

io.on('connection', (socket) =>
  socket.on('chat message', (msg) => io.emit('chat message', msg))
)

server.listen(3000, () => console.log('listening on *:3000'))
