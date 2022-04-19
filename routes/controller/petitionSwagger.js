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
 *            description: the create date to create.
 *      responses:
 *          200:
 *              description : success
 *          400: 
 *              description : Bad Request
 */

/**
 * @swagger
 * /petition/getOne/{id}:
 *  get:
 *      description: get one petition by id.
 *      tags : [Petition]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: input petition id.
 *      responses: 
 *          200:
 *              description : success
 *          400: 
 *              description : Bad Request
 */

/**
 * @swagger
 * /petition/filterByStatus:
 *  get:
 *      description: filter petition by status.
 *      tags : [Petition]
 *      parameters:
 *          - in: query
 *            name: status
 *            schema:
 *              type: string
 *            description: input petition status.
 *      responses: 
 *          200:
 *              description : success
 *          400: 
 *              description : Bad Request
 */

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

/**
 * @swagger
 * /petition/update/{id}:
 *  patch:
 *      description: Update petition petition.
 *      tags: [Petition]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: petition id
 *          - in: formData
 *            name: agentId
 *            type: string
 *            description: the agent id to create.
 *          - in: formData
 *            name: status
 *            description: petition status.
 *      responses:
 *          200:
 *              description : success
 *          404: 
 *              description : The data to be deleted does not exist in the database.
 *          400: 
 *              description : Bad Request
 */