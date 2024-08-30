import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        unique: true 
    },
    resetToken: { type: String },
    expireToken: Date
})


const UserModel = mongoose.model("User",UserSchema)

export {UserModel as User}