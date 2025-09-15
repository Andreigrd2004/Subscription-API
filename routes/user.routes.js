import {Router} from 'express';

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
    res.send({ title: "Get all users" })
});

userRoutes.get('/:id', (req, res) => {
    res.send({ title: "Get user's info" })
});

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