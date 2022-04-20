const Villager = require("../../models/villager");
const Agent = require('../../models/agent');
const logger = require("../../logger/logger");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const secretSalt = require('../../config/secret').salt;

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

exports.villagerLogin = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        const data = await Villager.findOne({ email: req.body.email });
        if (!data) {
            return res.status(400).json({ massage: 'Invalid email.' });
        }

        const validPassword = await bcrypt.compare(req.body.password, data.password);
        if (!validPassword) {
            return res.status(400).json({ massage: 'Invalid password.' });
        }
        const token = data.generateAuthToken();
        return res.status(201).json({ 'token': token });
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.agentLogin = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        const data = await Agent.findOne({ email: req.body.email });
        if (!data) {
            return res.status(400).json({ massage: 'Invalid email.' });
        }

        const validPassword = await bcrypt.compare(req.body.password, data.password);
        if (!validPassword) {
            return res.status(400).json({ massage: 'Invalid password.' });
        }
        const token = data.generateAuthToken();
        return res.status(201).json({ 'token': token });
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.getOneProfile = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        let data = await Villager.findById(req.params.id);
        if (!data) {
            logger.error(`${req.params.id} not found.`);
            return res.status(404).json({ massage: `${req.params.id} not found.` });
        }
        return res.status(200).json(data);
    }
    catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}