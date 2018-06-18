var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
console.log('server listening at 3000');

app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/index.html');
});

app.get('/admin', (req,res)=>{
	res.sendFile(__dirname + '/admin.html');
});

io.on('connection', function (socket){
	socket.emit('welcome', {data : 'welcome'});
	console.log("connected");
	socket.on('new', (data) =>{
		console.log('About to upload Quote');
		console.log(data);
		io.sockets.emit('next', {data : data});
	});
});