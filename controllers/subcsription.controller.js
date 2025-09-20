import Subscription from "../models/subscription.model.js";

export const createSubsription = async (req, res, next) => {
    try{
        const subscription = await Subscription.create({...req.body, user: req.user._id});

        res.status(201).json({success:true, data:subscription});
    }catch(error){
        next(error);
    }
}

export const getAllSubscriptions = async (req, res, next) => {
    try{
        console.log(req.user);
        console.log(req.params.id, req.user.id);
        if(req.params.id !== req.user.id){
            const error = new Error("You are trying to access unauthorized data");
            error.status = 401;
            next(error);
        }

        const subscriptions = await Subscription.find({user: req.params.id});

        res.status(200).json({success:true, data:subscriptions});
    }catch(error){
        next(error);
    }
}