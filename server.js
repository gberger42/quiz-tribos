//Dependencies

var express = require('express')
var api = require('./api')

var app = module.exports = express()


//Config

app.configure(function() {
  app.set('port', process.env.PORT || 3000)
  app.use(express.bodyParser())
  app.use(express.static(__dirname + '/public'))
  app.use(app.router)
})

app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
})

app.configure('production', function(){
  app.use(express.errorHandler())
});


//Routes

app.get('/api/dados', api.dados)
app.post('/api/entradas', api.entradas)

//Start!

app.listen(app.get('port'), function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
})