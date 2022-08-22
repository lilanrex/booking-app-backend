import User from "../models/User.js";

export async function register(req,res,next) {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
           await newUser.save();
           res.status(201).json("user has been created");
    } catch (err) {
        next(err);
    }
}