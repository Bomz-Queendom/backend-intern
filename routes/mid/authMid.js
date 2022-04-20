const jwt = require('jsonwebtoken');
const jwtSecret = require('../../config/secret').jwtSecret;
const logger = require('../../logger/logger');
const { body, validationResult, query, param } = require('express-validator');

exports.auth = (req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(403).json({ massage: 'Access Denied.' })
        }
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.midVillagerSignUp = [
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
    body("password").isString().not().isEmpty(),
    body("houseNumber").isString().not().isEmpty(),
    body("subDistrict").isString().not().isEmpty(),
    body("district").isString().not().isEmpty(),
    body("province").isString().not().isEmpty(),
    body("postalCode").isString().isLength({ max: 5, min: 5 }).not().isEmpty()
]

exports.midAgentSignUp = [
    body("firstName").isString().not().isEmpty(),
    body("lastName").isString().not().isEmpty(),
    body("agentPin").isString().not().isEmpty(),
    body("email").isEmail().not().isEmpty(),
    body("password").isString().not().isEmpty(),
    body("jobTitle").isString().not().isEmpty(),
    body("phoneNum").isString().isLength({ max: 10, min: 10 }).not().isEmpty(),
]

exports.midLogin = [
    body("email").isEmail().not().isEmpty(),
    body("password").isString().not().isEmpty()
]