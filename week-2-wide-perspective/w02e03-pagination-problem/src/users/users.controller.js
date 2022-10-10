import { Router } from 'express'
import { usersRepository } from './users.repository.js'

export const usersController = new Router()

usersController.get('', (req, res) => {
  const { paginate } = req

  const users = usersRepository.find({
    skip: paginate.skip,
    limit: paginate.limit,
  })
  res.json(users)
})

usersController.get('/:id', (req, res) => {
  const { id } = req.params
  const user = usersRepository.findOne({ id: Number(id) })
  res.json(user || {})
})
