const Villager = require("../../models/villager");
const logger = require("../../logger/logger");
const { validationResult } = require("express-validator");

exports.findAllVillagers = async (req, res) => {
    try {
        let data = await Villager.find({});
        if (data.length === 0) {
            logger.error("Villagers collection is empty.");
            return res.status(404).json({ massage: "Villagers collection is empty." });
        }
        return res.status(200).json(data);
    }
    catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.findOneVillager = async (req, res) => {
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

exports.villagerSearch = async (req, res) => {
    try {
        let data = await Villager.find({});
        const searchText = req.query;
        const searchData = data.filter(user => {
            let isValid = true;
            for (key in searchText) {
                isValid = isValid && user[key] == searchText[key];
            }
            return isValid;
        });
        if (!searchData || searchData.length == 0) {
            logger.error(`${Object.values(searchText)} not found`);
            return res.status(404).json({ massage: `${Object.values(searchText)} not found` });
        }
        return res.status(200).json(searchData);
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.updateVillager = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        const id = req.params.id;
        req.body.address = {
            houseNumber: req.body.houseNumber,
            subDistrict: req.body.subDistrict,
            district: req.body.district,
            province: req.body.province,
            postalCode: req.body.postalCode
        }
        const updatedData = req.body;
        const options = { new: true };

        const result = await Villager.findByIdAndUpdate(
            id, updatedData, options
        );
        if (!result) {
            logger.error(`can't edit data id : ${id}`);
            return res.status(404).json({ message: `can't edit data id : ${id}` });
        }
        return res.status(200).json({ massage: `id : ${result.id} updated successfully.` });
    }
    catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.deleteVillager = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        const id = req.params.id;
        const data = await Villager.findByIdAndDelete(id);
        if (!data) {
            logger.error("The data to be deleted does not exist in the database.");
            return res.status(404).json({ massage: "The data to be deleted does not exist in the database." });
        }
        return res.send(`${data.firstName} has been deleted..`);
    }
    catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}