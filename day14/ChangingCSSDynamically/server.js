var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);
console.log("Listening at 3000");

app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/css-color.html');
});

app.get('/admin', (req,res) =>{
	res.sendFile(__dirname + '/css-color-admin.html');
});

io.on('connection', function (socket) {
	socket.on('admin', (data) =>{
		console.log(data);
		console.log('about to broadcast');
		io.sockets.emit('color', {data: data});
	});
});