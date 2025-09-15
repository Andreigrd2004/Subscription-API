import express from "express";

import { PORT } from "./config/env.js";

const app = express();

app.get("/", async (req, res) => {
    res.send("Welcome to the user");
})

app.listen(PORT, () => {
    console.log(`Subscription server started at http://localhost:${ PORT }`);
});


export default app;