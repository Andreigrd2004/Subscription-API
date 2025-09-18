import {Router} from 'express';
import {signIn, signOut, signUp} from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/sign-up", signUp);

authRoutes.get("/sign-in", signIn);

authRoutes.put("/sign-out", signOut);

export default authRoutes;