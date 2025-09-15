import { Router } from 'express';

const subscriptionRoutes = Router();

subscriptionRoutes.get("/", (req, res) => {
    res.send({title: "Get all subscriptions"});
});

subscriptionRoutes.get("/:id", (req, res) => {
    res.send({title: "Get subscription details"});
});

subscriptionRoutes.post("/", (req, res) => {
    res.send({title: "Create Subscription"});
});

subscriptionRoutes.put("/:id", (req, res) => {
    res.send({title: "Update Subscription"});
});

subscriptionRoutes.delete("/:id", (req, res) => {
    res.send({title: "Subscription API"});
});

subscriptionRoutes.get("/user/:id", (req, res) => {
    res.send({title: "Get all User subscriptions"});
});

subscriptionRoutes.put("/:id/cancel", (req, res) => {
    res.send({title: "Cancel Subscription"});
});

subscriptionRoutes.get("/upcoming-renewals", (req, res) => {
    res.send({title: "Get all upcoming subscriptions"});
});


export default subscriptionRoutes;