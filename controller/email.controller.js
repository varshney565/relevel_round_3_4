/**
 * this file will have the logic for all the email related activities.
 */

const { mail }  = require("../model")

/**
 * logic for deleting an email.
 */

exports.deleteMail = async (req,res)=>{
    /**
     * get the req body
     */

    const req_body = {
        space : req.body.space
    }

    /**
     * deteting the mail
     */
    try{
        await mail.deleteOne({_id : req.params.id}).where({space : req_body.space});
        res.staus(200).send({
            message : "Email deleted successfully"
        })
    }catch(err){
        res.staus(500).send({
            message : "Internal server error !"
        })
    }
}