const express = require('express');
const app = express();
const http = require('http').S  erver(app);
const path = require('path')

app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, 'public')))

http.listen(app.get('port'), function(){
	console.log('listening at: ' +app.get('port'))
})

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html')
})

http.listen(app.get('port'), function(){
	console.log('listening at: '+app.get('port'))
}) 

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html')
})