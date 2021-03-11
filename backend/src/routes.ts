import { Router } from "express";
import { deleteAdress, getAdress, getAdressById, postAdress, putAdress } from "./controller/AdressController";
import { getUsers, postUser, putUser, deleteUser, login, getUserById } from "./controller/UserController";
import { auth } from "./middleware/auth"


const routes = Router();

routes.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
});

routes.post('/login', login);

routes.use(auth)

routes.post('/admin/post-user', postUser);
routes.get('/admin/get-user', getUsers);
routes.get('/admin/get-user/:id', getUserById);
routes.put('/admin/put-user/:id', putUser);
routes.delete('/admin/delete-user/:id', deleteUser);

routes.post('/admin/post-adress', postAdress);
routes.get('/admin/get-adress', getAdress);
routes.get('/admin/get-adress/:id', getAdressById);
routes.put('/admin/put-adress/:id', putAdress);
routes.delete('admin/delete-adress/:id', deleteAdress);

export default routes;
