const express = require("express");
const router = express.Router();
const { midCreate, midFindOne, midUpdate, midDelete } = require("./mid/agentMid");
const { createAgent, findAllAgents, findOneAgent, searchAgent, updateAgent, deleteAgent } = require("./routerFunc/agentFunc");

router.post("/create", midCreate, createAgent);
/**
 * @swagger
 * /agent/getAll:
 *  get:
 *    description: get all agent
 *    tags : [Agent]
 *    responses:
 *      200:
 *        description : success
 *      404: 
 *        description : villager not found.
 *      400: 
 *        description : Bad Request
 */
router.get("/getAll", findAllAgents);

/**
 * @swagger
 * /agent/getOne/{id}:
 *  get:
 *      description: get One Agent by Agent id
 *      tags : [Agent]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Agent id
 *      responses:
 *          200:
 *              description : success
 *          404: 
 *              description : Agent not found.
 *          400: 
 *              description : Bad Request
 */
router.get("/getOne/:id", midFindOne, findOneAgent);

/**
 * @swagger
 * /agent/search:
 *  get:
 *      description: search agent
 *      tags: [Agent]
 *      parameters:
 *          - in: query
 *            description: text search
 *      responses:
 *          200:
 *              description : success
 *          404: 
 *              description : text not found.
 *          400: 
 *              description : Bad Request
 */
router.get("/search", searchAgent);

/**
 * @swagger
 * /agent/create:
 *  post:
 *      description: create agent.
 *      tags : [Agent]
 *      parameters:
 *          - in: body
 *            name: agent
 *            description: the agent to create.
 *            schema : 
 *              type: object
 *              properties:
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  agentPin: 
 *                      type: string
 *                  email: 
 *                      type: string
 *                  jobTitle: 
 *                      type: string
 *                  phoneNum: 
 *                      type: string
 *      responses:
 *          200:
 *              description : success
 *          400: 
 *              description : Bad Request
 */
router.patch("/update/:id", midUpdate, updateAgent);

/**
 * @swagger
 * /agent/delete/{id}:
 *  delete:
 *      description: delete One agent by agent id
 *      tags : [Agent]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: agent id
 *      responses:
 *          200:
 *              description : success
 *          404: 
 *              description : The data to be deleted does not exist in the database.
 *          400: 
 *              description : Bad Request
 */
router.delete("/delete/:id", midDelete, deleteAgent);

module.exports = router;