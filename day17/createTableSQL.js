var mysql = require('mysql');

var connect = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'test'
});

var table = "CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT, name varchar(30) DEFAULT NULL, age float(15) DEFAULT NULL, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";

connect.connect((err)=>{
	connect.query(table, (err, result) =>{
		if(err) throw err;
		console.log('Table created successfully');
	});
});

