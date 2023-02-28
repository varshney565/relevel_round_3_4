/**
 * logic for routing the emails that are related to email related activities to corrosponding controller method
 */

const { deleteMail } = require("../controller/email.controller");
const { verifyToken } = require("../middleware/auth.jwt");
const {emailIdvalidate} = require('../middleware/email.validator');

module.exports = (app)=>{
    app.delete("/mail?id",[verifyToken,emailIdvalidate],deleteMail);
}