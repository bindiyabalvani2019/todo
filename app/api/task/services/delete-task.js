const { dbObject } = require('../../../dbConnect');
const { unAuthorized } = require('../../../format');

module.exports = async (req,res, next) => {
    try {
        const { userName, userGroup } = req.body;
        let resultArray;
        if(userGroup == 'Admin') {
            var myquery = { userName: userName };
            dbObject.collection("todos").deleteOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                resultArray = res;
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