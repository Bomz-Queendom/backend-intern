const Villager = require("../../models/villager");
const logger = require("../../logger/winstonLogger");
const { validationResult } = require("express-validator");


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