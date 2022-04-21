const Villager = require("../../models/villager");
const Agent = require('../../models/agent');
const logger = require("../../logger/logger");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const secretSalt = require('../../config/secret').salt;
const jwt = require('jsonwebtoken');
const jwtSecret = require('../../config/secret').jwtSecret;

exports.villagerSignUp = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        const checkEmail = await Villager.findOne({ email: req.body.email });
        if (checkEmail) {
            return res.status(403).json({ massage: 'Email is already in use.' });
        }
        req.body.address = {
            houseNumber: req.body.houseNumber,
            subDistrict: req.body.subDistrict,
            district: req.body.district,
            province: req.body.province,
            postalCode: req.body.postalCode
        }
        let data = new Villager(req.body);
        const salt = await bcrypt.genSalt(Number(secretSalt));
        data.password = await bcrypt.hash(data.password, salt);
        const dataToSave = await data.save();
        return res.status(200).json(`create villager ${data.id} successfuly.`);
    }
    catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.agentSignUp = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        const checkEmail = await Agent.findOne({ email: req.body.email });
        if (checkEmail) {
            return res.status(403).json({ massage: 'Email is already in use.' });
        }
        let data = new Agent(req.body);
        const salt = await bcrypt.genSalt(Number(secretSalt));
        data.password = await bcrypt.hash(data.password, salt);
        const dataToSave = await data.save();
        return res.status(200).json(`create agent ${data.id} successfuly.`);
    }
    catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.getProfile = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        if (req.user.agentPin) {
            let data = await Agent.findById(req.user.id);
            if (!data) {
                logger.error(`${req.user.id} not found.`);
                return res.status(404).json({ massage: `${req.user.id} not found.` });
            }
            return res.status(200).json(data);
        }
        let data = await Villager.findById(req.user.id);
        if (!data) {
            logger.error(`${req.user.id} not found.`);
            return res.status(404).json({ massage: `${req.user.id} not found.` });
        }
        return res.status(200).json(data);
    }
    catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.Login = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        const Vdata = await Villager.findOne({ email: req.body.email });
        const Adata = await Agent.findOne({ email: req.body.email });
        if (Vdata) {
            const validPassword = await bcrypt.compare(req.body.password, Vdata.password);
            if (!validPassword) {
                return res.status(400).json({ massage: 'Invalid password.' });
            }
            let token = jwt.sign({ id: Vdata.id }, jwtSecret);
            return res.status(201).json({ 'token': token });
        } else if (Adata) {
            const validPassword = await bcrypt.compare(req.body.password, Adata.password);
            if (!validPassword) {
                return res.status(400).json({ massage: 'Invalid password.' });
            }
            let token = jwt.sign({ id: Adata.id, agentPin: Adata.agentPin }, jwtSecret);
            return res.status(201).json({ 'token': token });
        } else {
            if (!Vdata && !Adata) {
                return res.status(400).json({ massage: 'Invalid email.' });
            }
        }
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}