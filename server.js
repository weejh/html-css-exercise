var fallback = require('express-history-api-fallback')
var express = require('express')
var app = express()
// for https
// var fs = require('fs')
// var https = require('https')
// https.createServer({
//   key: fs.readFileSync('./ssl-keys/private.key'),
//   cert: fs.readFileSync('./ssl-keys/certificate.pem')
// }, app).listen(8080)
//
var root = __dirname + '/'
app.use(express.static(root))
// app.use(fallback('index.html', { root: root }))
// require for http
app.listen(8080)
