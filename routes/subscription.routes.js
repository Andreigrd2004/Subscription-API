import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubsription, getAllSubscriptions } from '../controllers/subcsription.controller.js';

const subscriptionRoutes = Router();

subscriptionRoutes.get("/", (req, res) => {
    res.send({title: "Get all subscriptions"});
});

subscriptionRoutes.get("/:id", (req, res) => {
    res.send({title: "Get subscription details"});
});

subscriptionRoutes.post("/", authorize, createSubsription);

subscriptionRoutes.put("/:id", (req, res) => {
    res.send({title: "Update Subscription"});
});

subscriptionRoutes.delete("/:id", (req, res) => {
    res.send({title: "Subscription API"});
});

subscriptionRoutes.get("/user/:id", authorize, getAllSubscriptions);

subscriptionRoutes.put("/:id/cancel", (req, res) => {
    res.send({title: "Cancel Subscription"});
});

subscriptionRoutes.get("/upcoming-renewals", (req, res) => {
    res.send({title: "Get all upcoming subscriptions"});
});


export default subscriptionRoutes;