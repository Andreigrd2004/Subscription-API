import {Router} from 'express';
import { getAllUsers, getUser } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRoutes = Router();

userRoutes.get('/', authorize, getAllUsers);

userRoutes.get('/:id', authorize, getUser);

userRoutes.post('/:id', (req, res) => {
    res.send({ title: "Create new user" })
});

userRoutes.put('/:id', (req, res) => {
    res.send({ title: "Modify user's info" })
});

userRoutes.delete('/:id', (req, res) => {
    res.send({ title: "Delete user's info"})
});

export default userRoutes;