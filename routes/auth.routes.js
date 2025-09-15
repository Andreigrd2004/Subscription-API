import { Router } from 'express';

const authRoutes = Router();

authRoutes.post("/sign-up", (req, res) => {
    res.send("Sign up")
});

authRoutes.get("/sign-in", (req, res) => {
    res.send("Sign in")
});

authRoutes.put("/sign-out", (req, res) => {
    res.send("Sign out")
});

export default authRoutes;