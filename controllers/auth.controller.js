import mongoose from "mongoose";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            const error = new Error("User already exists");
            error.statusCode = 409;
            next(error);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({name, email, password: hashedPassword});

        const token = jwt.sign({userId: newUser._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});


        await session.commitTransaction();
        session.endSession();

        res.status(201).json({success:true, message:'User created successfully', data:{user: newUser, token}});
    }catch(err){
        await session.abortTransaction();
        await session.endSession();
        next(err);

    }

}

export const signIn = async (req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            next(error);
        }

        const isPaswordValid = await bcrypt.compare(password, user.password);
        if(!isPaswordValid){
            const error = new Error("Invalid credentials");
            error.statusCode = 401;
            next(error);
        }

        const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
        res.status(200).json({succcess:true, message:'User signed in successfully!', data: {user, token}});    
    }catch(err){
        next(err);
    }

}

export const signOut = async (req, res) => {

}