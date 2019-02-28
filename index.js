
/*var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/fruit', function(req, res){
   res.render('fruit', {fruits: ['banana', 'apple'] , foo: 'bar'})
})
app.listen(8000) */

var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('images'))

app.get('/computer', function(req, res){
   res.render('computer', {computers: ['Windows','OSX','Android','IOS'] })
})

app.listen(8000)