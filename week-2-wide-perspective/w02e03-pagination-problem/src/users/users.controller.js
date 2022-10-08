import {Router} from 'express';
import {usersRepository} from './users.repository.js';
import {paginate} from "../middlewares/paginate.middleware.js";

export const usersController = new Router();

usersController.get("", paginate("drop"), (req, res) => {
    const users = usersRepository.find(req.pagination);
    res.json(users);
});

usersController.get('/:id', (req, res) => {
    const {id} = req.params;
    const user = usersRepository.findOne({id: Number(id)});
    res.json(user || {});
});
