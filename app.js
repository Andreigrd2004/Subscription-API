import express from "express";
import { PORT } from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", async (req, res) => {
    res.send("Welcome to the user");
})

app.listen(PORT, () => {
    console.log(`Subscription server started at http://localhost:${ PORT }`);
});


export default app;