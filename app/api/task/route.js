const express = require('express');
const app = express.Router();
const { checkSchema } = require('express-validator');

const { validationResults } = require('./validations');
const { TodoTaskValidations: { todoSchema } } = require('./validations/task-schema');
const { created, success } = require('../../format');

const { addTask, updateTask } = require('./services')

app.get('/');
app.post('/', checkSchema(todoSchema), validationResults, addTask, created);
app.put('/', checkSchema(todoSchema), validationResults, updateTask, success);
app.delete('/');

module.exports = app;