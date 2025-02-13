import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true,unique:true},
    password: {type:String, required:true},
   
    address: {type:Object, default:{line1:'',line2:'',line3:''}},
    gender:{type:String,default:"Not selected"},
    dob:{type:String,default:"Not selected"},
    phone:{type:String,default:"0000000000"}
    
})

const userModel =mongoose.models.doctor || mongoose.model('user',userSchema)

export default userModel