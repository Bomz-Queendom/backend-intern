const logAgentAction = require("../../models/logAgentAction");
const logger = require("../../logger/winstonLogger");

exports.addLoggerAction = async (dataInput) => {
    try {
        let data = new logAgentAction(dataInput);
        const dataToSave = await data.save();
    } catch (error) {
        logger.error(error.massage);
    }
}