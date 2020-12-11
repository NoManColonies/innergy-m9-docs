/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - u_id
 *         - role
 *         - password
 *         - auth_id
 *       properties:
 *         u_id:
 *           type: string
 *           description: The auto-generated id of the user.
 *         auth_id:
 *           type: string
 *           description: The ssid of the user.
 *         role:
 *           type: string
 *           description: The role of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *         created_at:
 *           type: string
 *           format: date
 *           description: The date of the user creation.
 *       example:
 *          role: device
 *     Device:
 *       type: object
 *       required:
 *         - u_id
 *         - role
 *         - auth_id
 *       properties:
 *         u_id:
 *           type: string
 *           description: The auto-generated id of the user.
 *         auth_id:
 *           type: string
 *           description: The ssid of the user.
 *         role:
 *           type: string
 *           description: The role of the user
 *         created_at:
 *           type: string
 *           format: date
 *           description: The date of the user creation.
 *       example:
 *          data:
 *            value: 35
 *            type: temp
 *     Sensor:
 *       type: object
 *       required:
 *         - s_id
 *         - timestamp_date
 *         - type
 *         - unit
 *       properties:
 *         s_id:
 *           type: string
 *           description: The auto-generated id of the sensor.
 *         type:
 *           type: string
 *           description: The type of the sensor.
 *         unit:
 *           type: string
 *           description: The unit of the sensor's value.
 *         timestamp_date:
 *           type: string
 *           format: date
 *           description: The date of the user creation.
 *       example:
 *           unit: "degree Celcius"
 *           type: temp
 *           timestamp_date: 2020-12-10T00:00:00.000Z
 *     Raw:
 *       type: object
 *       required:
 *         - timestamp
 *         - value
 *       properties:
 *         value:
 *           type: float
 *           description: The value of the sensor at the time.
 *         timestamp:
 *           type: string
 *           format: date
 *           description: The date of the data creation.
 *       example:
 *           value: 35
 *           timestamp: 2020-12-10T12:54:34.432Z
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API to manage your users.
 */

/**
 * @swagger
 * tags:
 *   name: Devices
 *   description: API to manage your devices.
 */

/**
 * @swagger
 * tags:
 *   name: Data
 *   description: API to monitor data.
 */

/**
 *@swagger
 *path:
 * /:
 *   get:
 *     summary: Lists all the user's devices
 *     tags: [Users]
 *     responses:
 *       "200":
 *         description: The list of user's devices.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 * /user/create/:
 *   post:
 *     summary: Creates a new user
 *     tags: [Users]
 *     parameters:
 *      - in: header
 *        name: username
 *        schema:
 *          type: string
 *        required: true
 *      - in: header
 *        name: password
 *        schema:
 *          type: string
 *        required: true
 *      - in: header
 *        name: email
 *        schema:
 *          type: string
 *      - in: header
 *        name: key
 *        schema:
 *          type: string
 *     responses:
 *       "201":
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               status: success
 * /user/jwt/login/:
 *   post:
 *     summary: Login as user and request jwt token.
 *     tags: [Users]
 *     parameters:
 *      - in: header
 *        name: username
 *        schema:
 *          type: string
 *        required: true
 *      - in: header
 *        name: password
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       "201":
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               status: success
 * /user/api/login/:
 *   post:
 *     summary: Login as user and request api token.
 *     tags: [Users]
 *     parameters:
 *      - in: header
 *        name: username
 *        schema:
 *          type: string
 *        required: true
 *      - in: header
 *        name: password
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       "201":
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               status: success
 * /user/jwt/token/:
 *   put:
 *     summary: Request a new token via refresh token for jwt.
 *     tags: [Users]
 *     parameters:
 *      - in: header
 *        name: refreshToken
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       "200":
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               status: success
 * /user/jwt/logout/:
 *   delete:
 *     summary: Logout current jwt session
 *     tags: [Users]
 *     parameters:
 *      - in: header
 *        name: refreshToken
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       "200":
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               status: success
 * /user/api/logout/:
 *   delete:
 *     summary: Logout current api session
 *     tags: [Users]
 *     responses:
 *       "200":
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               status: success
 * /user/api/revoke/:
 *   delete:
 *     summary: Logout provided api session
 *     tags: [Users]
 *     parameters:
 *      - in: header
 *        name: apiToken
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       "200":
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               status: success
 * /device/create/:
 *   post:
 *     summary: Creates a new device for authenticated user
 *     tags: [Devices]
 *     responses:
 *       "200":
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               status: success
 * /device/feed/:
 *   post:
 *     summary: Feed a new array of data
 *     tags: [Devices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Device'
 *           example:
 *             data:
 *              -
 *                value: 35
 *                type: temp
 *              -
 *                value: 70
 *                type: moist
 *     responses:
 *       "200":
 *         description: The created data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *             example:
 *               status: success
 * /t/latest:
 *   get:
 *     summary: Gets a device array for authenticated user
 *     tags: [Data]
 *     responses:
 *       "200":
 *         description: The list of sensors.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *             example:
 *               status: success
 * /{dev_id}:
 *   get:
 *     summary: Gets a sensor array by device id
 *     tags: [Data]
 *     parameters:
 *       - in: path
 *         name: dev_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: The device id
 *     responses:
 *       "200":
 *         description: The list of sensors.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *             example:
 *               status: success
 * /{dev_id}/t/latest:
 *   get:
 *     summary: Gets a latest sensor array by device id
 *     tags: [Data]
 *     parameters:
 *       - in: path
 *         name: dev_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: The device id
 *     responses:
 *       "200":
 *         description: The list of sensors.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *             example:
 *               status: success
 * /{dev_id}/t/{timestamp}:
 *   get:
 *     summary: Gets a sensor array by device id within timestamp
 *     tags: [Data]
 *     parameters:
 *       - in: path
 *         name: dev_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: The device id
 *       - in: path
 *         name: timestamp
 *         schema:
 *           type: string
 *         required: true
 *         description: The date range for querying.
 *     responses:
 *       "200":
 *         description: The list of sensors.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *             example:
 *               status: success
 * /{dev_id}/s/{type}:
 *   get:
 *     summary: Gets a sensor array by device id filtered by type
 *     tags: [Data]
 *     parameters:
 *       - in: path
 *         name: dev_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: The device id
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: The sensor name
 *     responses:
 *       "200":
 *         description: The list of sensors.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *             example:
 *               status: success
 * /{dev_id}/s/{type}/t/{timestamp}:
 *   get:
 *     summary: Gets a sensor array by device id within timestamp filtered by type
 *     tags: [Data]
 *     parameters:
 *       - in: path
 *         name: dev_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: The device id
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: The sensor name
 *       - in: path
 *         name: timestamp
 *         schema:
 *           type: string
 *         required: true
 *         description: The date range for querying.
 *     responses:
 *       "200":
 *         description: The list of sensors.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *             example:
 *               status: success
 * /{dev_id}/t/{timestamp}/s/{type}:
 *   get:
 *     summary: Gets a sensor array by device id within timestamp filtered by type
 *     tags: [Data]
 *     parameters:
 *       - in: path
 *         name: dev_id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: The device id
 *       - in: path
 *         name: type
 *         schema:
 *           type: string
 *         required: true
 *         description: The sensor name
 *       - in: path
 *         name: timestamp
 *         schema:
 *           type: string
 *         required: true
 *         description: The date range for querying.
 *     responses:
 *       "200":
 *         description: The list of sensors.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *             example:
 *               status: success
 */

const express = require("express");
const router = express.Router();

module.exports = router;
