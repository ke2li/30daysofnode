var cluster = require('cluster');
var http = require('http');
var numofCPUs = require('os').cpus().length;

if(cluster.isMaster){
	console.log('Master with process ID: ${process.pid} is running');

	for(var i = 0; i< numofCPUs; i++){
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) =>{
		console.log('worker with process ID : ${worker.process.pid} died');
	});
} else{
	http.createServer((req,res) =>{
		red.writeHead(200);
		res.end('An example of clusters\n');
	}).listen(3000);
	console.log('Worker with process ID: ${process.pid} started');
}