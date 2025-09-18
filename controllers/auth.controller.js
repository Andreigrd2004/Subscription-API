import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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

        const newUser = await User.create({name, email, password});


        await session.commitTransaction();
    }catch(err){
        await session.abortTransaction();
        await session.endSession();
        next(err);

    }

}

export const signIn = async (req, res) => {

}

export const signOut = async (req, res) => {

}