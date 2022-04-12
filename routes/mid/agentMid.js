const { body, validationResult, query, param } = require('express-validator');

exports.midCreate = [
    body("firstName").isString().not().isEmpty(),
    body("lastName").isString().not().isEmpty(),
    body("agentPin").isString().not().isEmpty(),
    body("email").isEmail().not().isEmpty(),
    body("jobTitle").isString().not().isEmpty(),
    body("phoneNum").isString().isLength({ max: 10, min: 10 }).not().isEmpty(),
]

exports.midUpdate = [
    body("firstName").isString().not().isEmpty(),
    body("lastName").isString().not().isEmpty(),
    body("agentPin").isString().not().isEmpty(),
    body("email").isEmail().not().isEmpty(),
    body("jobTitle").isString().not().isEmpty(),
    body("phoneNum").isString().isLength({ max: 10, min: 10 }).not().isEmpty(),
]

exports.midFindOne = param("id").isMongoId().not().isEmpty();

exports.midDelete = param("id").isMongoId().not().isEmpty();