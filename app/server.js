const routes = require('./route');
const port = 3000;

const express = require('express');

const app = express();

app.use(routes);
app.listen(port, () => {
    console.log('port', port);
});


module.exports = app;