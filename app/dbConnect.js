var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:1500/mydb";

let dbObject;

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
    if (err) throw err;
    dbObject = db.db("mydb");
    dbObject.createCollection("todos", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
    dbObject.createCollection("users", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

module.exports = {
    dbObject
}