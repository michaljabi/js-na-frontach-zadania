import { Router } from 'express'
import { usersRepository } from './users.repository.js'

export const usersController = new Router()

usersController.get('', (req, res) => {
  const { skip, limit } = req.query
  const users = usersRepository.find({
    skip,
    limit
  })
  res.json(users)
})

usersController.get('/:id', (req, res) => {
  const { id } = req.params
  const user = usersRepository.findOne({ id: Number(id) })
  res.json(user || {})
})
