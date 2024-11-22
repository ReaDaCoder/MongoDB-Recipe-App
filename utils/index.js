import jwt from "jsonwebtoken";
import { JsonWebTokenError } from "jsonwebtoken";

function getToken(id){
    return jwt.sign({id: id}, process.env.JWT_SECRETE, {
        expiresIn:"1h",
    });
}

export default getToken