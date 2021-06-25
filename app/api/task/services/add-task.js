const { dbObject } = require('../../../dbConnect');
const { v4: uuidv4 } = require('uuid');

module.exports = async (req,res, next) => {
    try {
        const { title, userName, subTask } = req.body;
        todoDetailObj = { id: uuidv4(), title, userName, subTask, status: 'active', timestamp: new Date() };
        dbObject.collection("todos").insertOne(todoDetailObj, (err, res) => {
            if (err) throw err;
            console.log(" todo inserted");
            db.close();
          });
        res.body = {
            data: todoDetailObj,
            message: 'Success'
        }
    } catch(error) {
        res.send(error);
    }
}