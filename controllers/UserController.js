import UserModel from "../models/userModel.js";

export const getAllUsers = (req, res) => {
    UserModel.find({}, (err, users) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!users) return res.status(404).send({ message: `No existen users` });
        res.status(200).send({ users: users });
    });
};

export const insertUserData = (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    UserModel.create(data, (err, docs) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        res.send({ data: docs });
    })
};

/*
    Postman post
{
    "name": "example",
    "email": "example",
    "password": "example",
}
*/

export const deleteUserData = (req, res) => {
    let userId = req.params.id;
    UserModel.findByIdAndRemove(userId, (err, docs) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        res.send({ data: docs });
    })
};

export const getUserById = (req, res) => {
    let userId = req.params.id;
    UserModel.findOne({ _id: userId }, (err, user) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!user) return res.status(404).send({ message: `No existe ese user` });
        res.send({ user: user });
    });
};