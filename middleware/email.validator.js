/**
 * this file will have the logic to validate the emailId
 */

const {mail} = require('../model');

exports.emailIdvalidate = async (req,res)=>{
    try{
        if(!require('mongoose').Types.ObjectId.isValid(req.params.id)){
            console.log("Not a valid id !");
            return res.status(400).send({
                message : "invalid id !"
            })
        }

        /**
         * check if the mailId is valid or not.
         */
        const Mail = await mail.findOne({_id : req.params.id});
        
        if(!Mail){
            console.log("No Mail with this mail_id !!");
            return res.status(400).send({
                message : "No Mail with this Mail_id !!"
            })
        }
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message : err.name || "Internal Error !"
        })
    }
    /**
     * everything is ok.
     */
    next();
}