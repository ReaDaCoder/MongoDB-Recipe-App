import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Pleaseenter a valid email"]
    },

password:{
    type: String,
    required,
    validate:{
        validator: function(value){
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
        },
        message: "Password must contain at least one lowercase letter,one number and one special character",
    },
},
});

userSchema.methods.matchPasswords = async function (enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

export default mongoose.model("User", userSchema);