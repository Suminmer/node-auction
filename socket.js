const SocketIo = require('socket.io')

module.exports = (server, app) => {
  const io = SocketIo(server, { path: '/socket.io' })
  app.set('io', io)
  // 웹 소켓 연결 시
  io.on('connection', (socket) => {
    const req = socket.request
    const {
      headers: { referer }
    } = req
    const roomId = referer.split('/')[referer.split('/').length - 1]
    socket.join(roomId)
    socket.on('disconnect', () => {
      socket.leave(roomId)
    })
  })
}
