const express = require("express");
const { midCreate, midGetOne } = require("./mid/petitionMid");
const { createPetition, getAllPetition, getOnePetition } = require("./routerFunc/petitionFunc");
const router = express.Router();

/**
 * @swagger
 * /petition/create/{id}:
 *  post:
 *      description: create petition by villager id.
 *      tags : [Petition]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: villager id
 *          - in: formData
 *            name: images
 *            type: file
 *            description: petition images
 *          - in: body
 *            name: petition
 *            description: the petition to create.
 *            schema : 
 *              type: object
 *              properties:
 *                  petitionType: 
 *                      type: string
 *                  problemDetail:
 *                      type: string
 *                  needCorrective:
 *                      type: string
 *                  status:
 *                      type: string
 *                  createDate:
 *                      type: string
 *      responses:
 *          200:
 *              description : success
 *          400: 
 *              description : Bad Request
 */
router.post("/create/:id", createPetition);

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
router.use("/images", express.static('./public/images/petitionImage'));

module.exports = router;