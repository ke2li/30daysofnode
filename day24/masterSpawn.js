var cp = require('child_process');

for(var i = 1; i < 6; i++){
	var worker = cp.spawn('node', ['slave.js', i]);

	worker.stdout.on('data', (data) =>{
		console.log("value of stdout: " + data);
	});

	worker.stderr.on('data', (data) =>{
		console.log("stderr: " + data);
	});

	worker.on('close', (code) =>{
		console.log("child process exited with code");
	});
}