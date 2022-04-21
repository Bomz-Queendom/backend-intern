const { body, param, query } = require('express-validator');
const upload = require("../../lib/uploadImage");


exports.midCreate = [
    param("id").isMongoId().notEmpty(),
    body("petitionType").isString().not().isEmpty(),
    body("problemDetail").isString().not().isEmpty(),
    body("needCorrective").isString().not().isEmpty(),
    body("status").isString().not().isEmpty(),
]

exports.midGetOne = [
    param("id").isMongoId().notEmpty(),
]

exports.midDelete = [
    param("id").isMongoId().notEmpty(),
]

exports.midFilter = [
    query("status").isString()
]

exports.midUpdate = [
    param("id").isMongoId(),
    body("agentId").isMongoId(),
    body("status").isString()
]