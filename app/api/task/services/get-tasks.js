const { dbObject } = require('../../../dbConnect');

module.exports = async (req,res, next) => {
    try {
        const { id } = req.params;
        todoDetailObj = { title, userName, subTask, status: 'active', timestamp: new Date() };
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