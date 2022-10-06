import { Router } from 'express'
import { usersRepository } from './users.repository.js'
import {getPaginationParamas} from "../middleware.js";

export const usersController = new Router()


usersController.get('', (req, res) => {
  const { skip, limit } = getPaginationParamas(req.query)
  const users = usersRepository.find({
    skip: skip ? skip: 0,
    limit: limit ? limit: undefined,
  })
  res.json(users)
})

usersController.get('/:id', (req, res) => {
  const { id } = req.params
  const user = usersRepository.findOne({ id: Number(id) })
  res.json(user || {})
})
