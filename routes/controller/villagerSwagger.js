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
 * /villager/update/{id}:
 *  patch:
 *      description: create villager.
 *      tags : [Villager]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: the villager to update.
 *          - in: formData
 *            name: firstName
 *            description: villager first name.
 *          - in: formData
 *            name: lastName
 *            description: villager last name.
 *          - in: formData
 *            name: age
 *            description: villager age.
 *          - in: formData
 *            name: gender
 *            description: villager gender.
 *          - in: formData
 *            name: religion
 *            description: villager religion.
 *          - in: formData
 *            name: ethnicity
 *            description: villager ethnicity.
 *          - in: formData
 *            name: nationalty
 *            description: villager nationalty.
 *          - in: formData
 *            name: phoneNum
 *            description: villager phone number.
 *          - in: formData
 *            name: dateOfBirth
 *            description: villager date of birth.
 *          - in: formData
 *            name: idCart
 *            description: villager id cart.
 *          - in: formData
 *            name: email
 *            description: villager email.
 *          - in: formData
 *            name: password
 *            description: villager password.
 *          - in: formData
 *            name: houseNumber
 *            description: villager houseNumber.
 *          - in: formData
 *            name: subDistrict
 *            description: villager sub district.
 *          - in: formData
 *            name: district
 *            description: villager district.
 *          - in: formData
 *            name: province
 *            description: villager province.
 *          - in: formData
 *            name: postalCode
 *            description: villager postalCode.
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