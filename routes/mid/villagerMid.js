const { body, validationResult, query, param } = require('express-validator');

exports.midCreate = [
    body("firstName").isString().not().isEmpty(),
    body("lastName").isString().not().isEmpty(),
    body("age").isInt().not().isEmpty(),
    body("gender").isString().not().isEmpty(),
    body("religion").isString().not().isEmpty(),
    body("ethnicity").isString().not().isEmpty(),
    body("nationalty").isString().not().isEmpty(),
    body("phoneNum").isString().not().isEmpty(),
    body("dateOfBirth").isDate().not().isEmpty(),
    body("idCart").isString().isLength({ min: 13 }).not().isEmpty(),
    body("email").isEmail().not().isEmpty(),
    body("address.houseNumber").isString().not().isEmpty(),
    body("address.subDistrict").isString().not().isEmpty(),
    body("address.district").isString().not().isEmpty(),
    body("address.province").isString().not().isEmpty(),
    body("address.postalCode").isString().isLength({ max: 5, min: 5 }).not().isEmpty()
]

exports.midUpdate = [
    body("firstName").isString().not().isEmpty(),
    body("lastName").isString().not().isEmpty(),
    body("age").isInt().not().isEmpty(),
    body("gender").isString().not().isEmpty(),
    body("religion").isString().not().isEmpty(),
    body("ethnicity").isString().not().isEmpty(),
    body("nationalty").isString().not().isEmpty(),
    body("phoneNum").isString().not().isEmpty(),
    body("dateOfBirth").isDate().not().isEmpty(),
    body("idCart").isString().isLength({ min: 13 }).not().isEmpty(),
    body("email").isEmail().not().isEmpty(),
    body("address.houseNumber").isString().not().isEmpty(),
    body("address.subDistrict").isString().not().isEmpty(),
    body("address.district").isString().not().isEmpty(),
    body("address.province").isString().not().isEmpty(),
    body("address.postalCode").isString().isLength({ max: 5, min: 5 }).not().isEmpty(),
]

exports.midFindOne = param("id").isMongoId().not().isEmpty();

exports.midDelete = param("id").isMongoId().not().isEmpty();