import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";
import bcryppt from 'bcrypt';


const loginUser  =async (req, res) => {

    const {email,password}= req.body;

    console.log('this is the request body ' + email + password);

    //find if email exists
    const user = await userModel.findOne({"email":email});

    if(!user){
        //error code
        console.log("error cannot register an existing user")
        res.status(409).send("Something wrong with  password or username please try again")
    }else{

        const userPassword= user.password;
        const username= user.username;
        const id = user._id;
        const userRole= user.role;
        const _userinfoId = user.userInfoID;
        const isVerified = user.isVerified;

        // unhash then check if passwords are the same

        const passwordIsSame= await bcryppt.compare(password,userPassword);

        if(passwordIsSame){
            jwt.sign({
                    id,email,username,userRole,_userinfoId,isVerified
                },process.env.JWT_SECRET,
                {
                    expiresIn:'3d',
                },
                (err,token) => {
                    if(err){
                        return res.status(500).send(err);
                    }

                    res.json(token)
                    console.log("token: "+token)

                });

        }else{
            //wrong password send error
            res.sendStatus(401);
        }

    }
}

export default loginUser;