const mysql = require("mysql")

const con = mysql.createConnection({
    host: 'localhost',									
    user: 'root',
    password: 'password',
    database: 'mydb'
})

con.connect((err) => {
    if (err) throw err;
    console.log("connected");

    // inserting into Table named "customers"
    const sql = "INSERT INTO customers (name, address) VALUES ?";

    const values = [
        ['John Doe', '123 Main St'],
        ['Jane Smith', '456 Elm Ave'],
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ]

    con.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("Number of record inserted" + result.affectedRows);
    })
})
