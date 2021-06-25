const { dbObject } = require('../../../dbConnect');
const { v4: uuidv4 } = require('uuid');

module.exports = async (req,res, next) => {
    try {
        const { title, userName, subTask } = req.body;
        todoDetailObj = { id: uuidv4(), title, userName, subTask, status: 'active', timestamp: new Date() };
        if(userGroup == 'Admin') {
            dbObject.collection("todos").insertOne(todoDetailObj, (err, res) => {
                if (err) throw err;
                console.log(" todo inserted");
                db.close();
            });
            res.body = {
                data: todoDetailObj,
                message: 'Success'
            }
        } else {
            const errors = {
                message: 'Not Admin user'
            }
            unAuthorized(req,res, errors);
        }
        next();
    } catch(error) {
        res.send(error);
    }
}