module.exports = (mongoose)=>{
    const userSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true
        },
        userId : {
            type : String,
            required : true,
            unique : true
        },
        email : {
            type : String,
            unique : true,
            minLength : 10,
            required : true,
            lowercase : true
        },
        password : {
            type : String,
            required : true
        }
    });
    return mongoose.model('user',userSchema);
}