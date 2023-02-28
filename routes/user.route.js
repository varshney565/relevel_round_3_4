/**
 * logic to connect the incomming request to the corrosponding controller method
 */

const {getMail} = require('../controller/user.controller');

module.exports = (app)=>{
    app.get("/user/mail/search?subject",getMail);
    app.get("/user/mail/search?description",getMail);
}