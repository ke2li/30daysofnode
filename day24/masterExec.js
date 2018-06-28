var cp = require('child_process');

for(var i=1; i<6; i++){
	var workerProcess = cp.exec('node slave.js ' + i, (error, stdout, stderr)=>{
		if(error) {
			console.log(error.stack);
			console.log("error code: " + error.code);
			console.log('error signal: ' + error.signal);
		}
		if(stderr) {
			console.log("value of stderr: " + stderr);
		}

		console.log("value of stdout : "+ stdout);
	});

	workerProcess.on('exit', (code)=>{
		console.log('child process exited');
	});
}