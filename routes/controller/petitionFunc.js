const Villager = require("../../models/villager");
const logger = require("../../logger/winstonLogger");
const { validationResult } = require("express-validator");
const { addLoggerAction } = require("./logAgentActionFunc");


exports.createPetition = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        let imagesInput = req.files.images;
        let dataInput = req.body;
        let filesNames = [];
        let imageName = `${Date.now()}-${imagesInput.name}`;
        filesNames.push(imageName);
        imagesInput.mv(`./public/images/petitionImage/${imageName}`);
        dataInput = Object.assign(dataInput, { images: filesNames });
        const id = req.params.id;
        const options = { new: true };
        let newData = await Villager.findByIdAndUpdate(id, { $push: { petitions: dataInput } }, options);
        return res.status(200).json("Create petition successfuly.");
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.getAllPetition = async (req, res) => {
    try {
        let data = await Villager.find();
        if (data.length === 0) {
            logger.error("Villagers collection is empty.");
            return res.status(404).json({ massage: "Villagers collection is empty." });
        }
        let result = []
        data.forEach(index => {
            if (index.petitions.length === 0) {
                logger.error("Petitions is empty.");
                return res.status(404).json({ massage: "Petitions collection is empty." });
            }
            return res.status(200).json(index.petitions);
        });
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.getOnePetition = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        let id = req.params.id;
        let data = await Villager.findOne({ 'petitions.id': id });
        if (!data) {
            logger.error(`${id} not found.`);
            return res.status(404).json(`${id} not found.`);
        }
        let result = {};
        data.petitions.forEach(element => {
            result = element;
        });
        if (result != null) {
            return res.status(200).json(result);
        }
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.filterPetitionByStatus = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        let textFilter = req.query.status;
        let data = await Villager.findOne({ 'petitions.status': textFilter });
        if (!data) {
            logger.error(`${textFilter} not found.`);
            return res.status(404).json(`${textFilter} not found.`);
        }
        let result = []
        data.petitions.forEach(element => {
            result.push(element);
        });
        return res.status(200).json(result);
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.deletePetition = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        let petitionId = req.params.id;
        let findData = await Villager.findOne({ 'petitions.id': petitionId });
        let obj = null;
        findData.petitions.forEach(index => {
            if (index.id === petitionId) {
                obj = index;
            }
        });
        let data = await Villager.findOneAndUpdate({ "petitions.id": petitionId }, {
            $pull: {
                'petitions': obj
            }
        });
        return res.status(200).json(`delete petition id ${petitionId} success.`);
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.updatePetition = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        let text = req.body.status;
        let petitionId = req.params.id;
        let findData = await Villager.findOne({ 'petitions.id': petitionId });
        let obj = null;
        var actions = {};
        findData.petitions.forEach(index => {
            if (index.id === petitionId) {
                obj = index;
                actions['afterAction'] = JSON.stringify(index);
                obj.status = text;
            }
        });
        actions['beforAction'] = JSON.stringify(obj);
        actions['agentId'] = req.body.agentId;
        actions['actionDate'] = Date.now();
        addLoggerAction(actions);
        let data = await Villager.findOneAndUpdate({ "petitions.id": petitionId }, {
            $push: {
                'petitions': obj
            }
        });
        return res.status(200).json(`updata petition status ${petitionId} success.`);
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}