/**
 * @swagger
 * /auth/villagerlogin:
 *  post:
 *      description: user login
 *      tags: [Authentication]
 *      parameters:
 *          - in: formData
 *            name: email
 *            description: user email
 *          - in: formData
 *            name: password
 *            description: user password
 *      responses:
 *          200:
 *              description : ok
 *          201:
 *              description : created
 *          400: 
 *              description : Bad Request
 */

/**
 * @swagger
 * /auth/agentlogin:
 *  post:
 *      description: user login
 *      tags: [Authentication]
 *      parameters:
 *          - in: formData
 *            name: email
 *            description: user email
 *          - in: formData
 *            name: password
 *            description: user password
 *      responses:
 *          200:
 *              description : ok
 *          201:
 *              description : created
 *          400: 
 *              description : Bad Request
 */

/**
 * @swagger
 * /auth/villagerSignUp:
 *  post:
 *      description: villager sign up.
 *      tags: [Authentication]
 *      parameters:
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
 *              description : ok
 *          403:
 *              description : Forbidden
 *          400: 
 *              description : Bad Request
 * 
 */

/**
 * @swagger
 * /auth/agentSignUp:
 *  post:
 *      description: agent sign up.
 *      tags: [Authentication]
 *      parameters:
 *          - in: formData
 *            name: firstName
 *            description: agent first name.
 *          - in: formData
 *            name: lastName
 *            description: agent first name.
 *          - in: formData
 *            name: agnetId
 *            description: agent pin.
 *          - in: formData
 *            name: email
 *            description: agent email.
 *          - in: formData
 *            name: password
 *            description: agent password.
 *      responses:
 *          200:
 *              description : ok
 *          403:
 *              description : Forbidden
 *          400: 
 *              description : Bad Request
 * 
 */