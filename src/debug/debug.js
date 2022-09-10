const debug = require('debug')('http')
const http = require('http')
const name = 'My App'

// fake app

debug('booting %o', name)

http.createServer((req, res) => {
  debug(`${req.method} ${req.url}`)
  res.end('hello\n')
}).listen(3030, () => {
  debug('listening')
})

// fake worker of some kind

require('./worker.js')
