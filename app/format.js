const badRequest = (req, res, errors) => {
    res.status(400);
    res.json(errors)
}

const success = (req, res) => {
    res.body = res.body || {}
    res.status(200);
    res.json(res.body);
}

const unAuthorized = (req, res, errors ) => {
    res.status(401);
    res.json(errors)
}

const created = (req, res) => {
    res.body = res.body || {}
    res.status(201);
    res.json(res.body);
}

const internalServerError = (req, res, errors ) => {
    res.status(500);
    if(errors || errors.stack) {
        res.body = errors;
    }
}

module.exports = {
    success, created, unAuthorized, badRequest, internalServerError
}