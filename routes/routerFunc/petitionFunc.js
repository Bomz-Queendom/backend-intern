const Villager = require("../../models/villager");
const logger = require("../../logger/winstonLogger");
const { validationResult } = require("express-validator");
const fs = require('fs');
const { index } = require("../../models/image");
const req = require("express/lib/request");
const res = require("express/lib/response");


exports.createPetition = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            logger.error(error.array());
            return res.status(400).json({ error: error.array() });
        }
        let imagesInput = req.files.images;
        let dataInput = req.body;
        let filesName = [];
        imagesInput.forEach(index => {
            filesName.push(`${Date.now()}-${index.name}`);
            index.mv(`./public/images/petitionImage/${Date.now()}-${index.name}`)
        });
        dataInput.images = filesName;
        const id = req.params.id;
        const options = { new: true };
        let data = await Villager.findById(id);
        data.petitions.push(dataInput);
        let newData = await Villager.findByIdAndUpdate(id, data, options);
        return res.status(200).json("Create petition successfuly.");
    } catch (error) {
        logger.error(error.massage);
        return res.status(400).json({ message: error.message });
    }
}

exports.getAllPetition = async (req, res) => {
    try {
        let data = await Villager.find({});
        if (data.length === 0) {
            logger.error("Villagers collection is empty.");
            return res.status(404).json({ massage: "Villagers collection is empty." });
        }
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