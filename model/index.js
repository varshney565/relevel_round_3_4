/**
 * This file will expose all the collections that will be present in the mongoDB database.
 */

const mongoose = require('mongoose');


/**
 * getting the email collection.
 */
const mail = require('./mail.model')(mongoose);


/**
 * getting user collection
 */
const user = require('./user.model');