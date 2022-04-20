const mongoose = require("mongoose");
var logger = require("../logger/logger");

const MONGOURL = require('../config/secret');

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURL.DBcon, { useNewUrlParser: true })
            .then(() => {
                logger.info("Connected to DB !!");
            });

    } catch (error) {
        console.log(error);
        logger.error(error);
    }
}

module.exports = InitiateMongoServer;