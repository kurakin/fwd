let router = module.exports = require('koa-better-router')({ prefix: '/_' })

const fs = require('fs')
const __file = require('path').basename(__filename)

// find all routes in the current directory
fs.readdir(__dirname, (err, files) => {
  if (err) throw err
  files.forEach(f => {
    if (f === __file) return
    let route = require('./' + f)
    let middleware = [route.handler]
    if (route.authenticated) middleware.unshift(require('../middleware/authenticated'))
    router.addRoute(route.route, middleware)
  })
})
