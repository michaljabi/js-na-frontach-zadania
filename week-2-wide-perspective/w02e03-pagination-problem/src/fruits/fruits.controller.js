import {Router} from 'express';
import {fruitsRepository} from './fruits.repository.js';
import {paginate} from "../middlewares/paginate.middleware.js";

export const fruitsController = new Router();

fruitsController.get("", paginate(), (req, res) => {
    const fruits = fruitsRepository.find(req.pagination);
    res.json(fruits);
});

fruitsController.get('/:id', (req, res) => {
    const {id} = req.params;
    const fruit = fruitsRepository.findOne({id: Number(id)});
    res.json(fruit || {});
});
