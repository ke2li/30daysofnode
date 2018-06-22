var mysql = require('mysql');

var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
});

var update_R = 'UPDATE details SET age = ? WHERE name=?';

connect.connect((err) =>{
	if(err) throw err;

	connect.query(update_R, [25, 'regii'], (err,res)=>{
		if(err) throw err;
		console.log('updated the age of regii');
	});
});