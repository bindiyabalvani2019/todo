const validations = {
    titleValidation: {
        in: ['body'],
        isLength: {
            errorMessage: 'Title should be there while adding Todo'
        }
    },
    userNameValidation: {
        in: ['body'],
        isLength: {
            errorMessage: 'Username should be there'
        }
    },
    subTaskValidation: {
        in: ['body'],
        isArray: {
            errorMessage: 'subTask should be there'
        }
    }
}

const TodoTaskValidations = {
    todoSchema: {
        title: validations.titleValidation,
        userName : validations.userNameValidation,
        subTask: validations.subTaskValidation
    }
}

module.exports = {
    TodoTaskValidations
}