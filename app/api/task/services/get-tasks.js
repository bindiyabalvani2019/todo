const { dbObject } = require('../../../dbConnect');
const { unAuthorized } = require('../../../format');

module.exports = async (req,res, next) => {
    try {
        const { userName, userGroup } = req.params;
        const query = { userName : userName };
        let resultArray;
        if(userGroup == 'Admin') {
            dbObject.collection("todos").find(query).toArray((err, result) => {
                if (err) throw err;
                resultArray = result;
                db.close();
              });
            res.body = {
                data: resultArray,
                message: 'Success'
            }
        } else {
            const errors = {
                message: 'Not Admin user'
            }
            unAuthorized(req,res, errors)
        }
        next();
        
    } catch(error) {
        res.send(error);
    }
}