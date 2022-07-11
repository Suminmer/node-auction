const SSE = require('sse')

module.exports = (server) => {
  const sse = new SSE(server)
  // 서버센트 이벤트 연결
  sse.on('connection', (client) => {
    setInterval(() => {
      client.send(Date.now().toString())
    }, 1000)
  })
}
