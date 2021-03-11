import { Router, Request, Response } from "express";
import { deleteAdress, getAdress, getAdressById, postAdress, putAdress } from "./controller/AdressController";
import { getUsers, postUser, getUserById, putUser, deleteUser, login } from "./controller/UserController";
import { auth } from "./middleware/auth"


const routes = Router();

routes.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

routes.post('/login', login)
routes.post('/register', postUser);

routes.use(auth)

routes.get('/user', getUsers);
routes.get('/user/:id', getUserById);
routes.put('/user/:id', putUser);
routes.delete('/user/:id', deleteUser);

routes.post('/adress', postAdress);
routes.get('/adress', getAdress);
routes.get('/adress/:id', getAdressById);
routes.put('/adress/:id', putAdress);
routes.delete('/adress/:id', deleteAdress);

export default routes;
