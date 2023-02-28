const { mail , user } = require('../model');

exports.getMail = async (req,res)=>{
    /**
     * getting the request body.
     */
    const req_body = {
        keyboard : req.body.keyboard,
        searchSpace : req.body.searchSpace
    }

    /**
     * logic for getting all the mails
     */

    /**
     * get the userId
     * after validating the jwt token.
     */
    const userId = req.userId;

    /**
     * get all the emails based on the text that we are searching.
     */
    try{
        const mails = await mail.find({$text : {$search : req_body.keyboard}}).where({userId : userId}).where({space : req_body.searchSpace});
        res.status(200).send(mails);
    }catch(err){
        console.log("some error while fetching all the emails !!");
        res.status(500).send({
            message : 'Internal server error'
        })
    }
}