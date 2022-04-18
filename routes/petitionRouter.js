const express = require("express");
const { midCreate, midGetOne } = require("./mid/petitionMid");
const { createPetition, getAllPetition, getOnePetition, deletePetition } = require("./controller/petitionFunc");
const router = express.Router();

/**
 * @swagger
 * /petition/create/{id}:
 *  post:
 *      description: create petition by villager id.
 *      tags : [Petition]
 *      consumes:
 *          - multipart/form-data
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            description: villager id
 *          - in: formData
 *            name: images
 *            type: file
 *            description: petition images
 *          - in: formData
 *            name: agentId
 *            type: string
 *            description: the agent id to create.
 *          - in: formData
 *            name: petitionType
 *            type: string
 *            description: the petitionType to create.
 *          - in: formData
 *            name: problemDetail
 *            type: string
 *            description: the problemDetail to create.
 *          - in: formData
 *            name: needCorrective
 *            type: string
 *            description: the needCorrective to create.
 *          - in: formData
 *            name: status
 *            type: string
 *            description: the status to create.
 *          - in: formData
 *            name: createDate
 *            type: string
 *            description: the createDate to create.
 *      responses:
 *          200:
 *              description : success
 *          400: 
 *              description : Bad Request
 */
router.post("/create/:id", midCreate, createPetition);

/**
 * @swagger
 * /petition/getAll:
 *  get:
 *      description: Get All Petition
 *      tags : [Petition]
 *      responses:
 *          200:
 *              description : success
 *          404: 
 *              description : The data to be deleted does not exist in the database.
 *          400: 
 *              description : Bad Request
 */
router.get("/getAll", getAllPetition);


/**
 * @swagger
 * /petition/delete/{id}:
 *  delete:
 *      description: Delete One Petition by petition id.
 *      tags: [Petition]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: petition id
 *      responses:
 *          200:
 *              description : success
 *          404: 
 *              description : The data to be deleted does not exist in the database.
 *          400: 
 *              description : Bad Request
 */
router.delete("/delete/:id", deletePetition);
router.use("/images", express.static('./public/images/petitionImage'));

module.exports = router;