// Including the package
const mongo = require("mongodb");

// Creating the connection
const db = mongodb("mongodb://localhost:27017/demo-db");
//establishing the connection
mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}
	console.log("Database demo_db created successfully");
	//To close the connection
	db.close();
});
	