import express from "express";
import { getAllUsers, getUserById, insertUserData, deleteUserData } from "../controllers/UserController.js";
const routes = express.Router();


//Routes
routes.get('/users', getAllUsers);
routes.get('/users/:id', getUserById);
routes.post('/users/', insertUserData);
routes.delete('/users/:id', deleteUserData);


export default routes;