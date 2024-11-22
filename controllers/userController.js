import User from "../models/user.js";
import bcrypt, { hash } from "bcrypt";
import getToken from "../utils/index.js";

const registerUser = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                error: "User already exists",
                
            });
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            password: hashPassword,
        });

        res.status(202).json({
            _id: user._id,
            email: user.email,
        })
    } catch (error){
        if(error.name === "validationError"){
            res.status(400).json({error: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
};

const loginUser = async (req, res) =>{
    try{
        const { email, password} = req.body;
        const user = User.findOne({email});

        if(!user || !(await user.matchPasswords(password))){
            return res.status(401).json({
                error: "Invalid credentails",
            })
        }
        const token = await getToken(user._id)
        res.status(200).json({
            _id: user._id,
            email: user.email,
            token,
        });
    } catch (error){
        res.status(500).json({ error: "Internal error"});
    }
};

export default{
    registerUser,
    loginUser
}