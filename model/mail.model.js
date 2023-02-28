/**
 * this file will have the Schema for email.
 */


module.exports = (mongoose)=>{
    const emailSchema = new mongoose.Schema({
        space : {
            type : String,
            required : true
        },
        subject : {
            type : String
        },
        description : {
            type : String
        },
        userId : {
            type : String,
            required : true
        }
    })
    
    /**
     * creating the text based indexing on mail schema.
     */

    emailSchema.index({ subject : 'text', description : 'text' });
    return mongoose.model('email',emailSchema);
}