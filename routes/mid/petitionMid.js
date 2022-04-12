const { body, param } = require('express-validator');
const upload = require("../../lib/uploadImage");


exports.midCreate = [
    param("id").isMongoId().notEmpty(),
    body("petitionType").isString().not().isEmpty(),
    body("problemDetail").isString().not().isEmpty(),
    body("images").isArray(),
    body("needCorrective").isString().not().isEmpty(),
    body("status").isString().not().isEmpty(),
    body("createDate").isDate().not().isEmpty(),
]

exports.midGetOne = [
    param("id").isMongoId().notEmpty(),
]