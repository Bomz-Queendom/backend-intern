/**
 * @swagger
 * /villager/getAll:
 *  get:
 *    description: get all villagers
 *    tags : [Villager]
 *    responses:
 *      200:
 *        description : success
 *      404:
 *        description : villager not found.
 *      400:
 *        description : Bad Request
 */

/**
 * @swagger
 * /villager/getOne/{id}:
 *  get:
 *      description: get One villagers by villager id
 *      tags : [Villager]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: villager id
 *      responses:
 *          200:
 *              description : success
 *          404:
 *              description : villager not found.
 *          400:
 *              description : Bad Request
 */

// /**
//  * @swagger
//  * /villager/search:
//  *  get:
//  *      description: search villager
//  *      tags: [Villager]
//  *      parameters:
//  *          - in: query
//  *            description: text search
//  *      responses:
//  *          200:
//  *              description : success
//  *          404:
//  *              description : text not found.
//  *          400:
//  *              description : Bad Request
//  */


/**
 * @swagger
 * /villager/create:
 *  post:
 *      description: create villager.
 *      tags : [Villager]
 *      parameters:
 *          - in: body
 *            name: villager
 *            description: the villager to create.
 *            schema : 
 *              type: object
 *              properties:
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  age: 
 *                      type: integer
 *                  gender: 
 *                      type: string
 *                  religion: 
 *                      type: string
 *                  ethnicity: 
 *                      type: string
 *                  nationalty: 
 *                      type: string
 *                  phoneNum: 
 *                      type: string
 *                  dateOfBirth: 
 *                      type: string
 *                  idCart: 
 *                      type: string
 *                  email: 
 *                      type: string
 *                  address:
 *                      type: object
 *      responses:
 *          200:
 *              description : success
 *          400: 
 *              description : Bad Request
 */

/**
 * @swagger
 * /villager/update/{id}:
 *  patch:
 *      description: create villager.
 *      tags : [Villager]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: the villager to update.
 *          - in: body
 *            name: villager
 *            description: the villager to update.
 *            schema : 
 *              type: object
 *              properties:
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  age: 
 *                      type: integer
 *                  gender: 
 *                      type: string
 *                  religion: 
 *                      type: string
 *                  ethnicity: 
 *                      type: string
 *                  nationalty: 
 *                      type: string
 *                  phoneNum: 
 *                      type: string
 *                  dateOfBirth: 
 *                      type: string
 *                  idCart: 
 *                      type: string
 *                  email: 
 *                      type: string
 *                  address:
 *                      type: object
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
 * /villager/delete/{id}:
 *  delete:
 *      description: delete One villagers by villager id
 *      tags : [Villager]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: villager id
 *      responses:
 *          200:
 *              description : success
 *          404: 
 *              description : The data to be deleted does not exist in the database.
 *          400: 
 *              description : Bad Request
 */