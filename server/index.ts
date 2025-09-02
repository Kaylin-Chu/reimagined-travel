import server from './server.ts'

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('Listening on port', port)
})
