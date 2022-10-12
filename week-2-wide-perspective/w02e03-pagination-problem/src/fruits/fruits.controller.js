import { Router } from 'express'
import { fruitsRepository } from './fruits.repository.js'

export const fruitsController = new Router()

fruitsController.get('', (req, res) => {
  const fruits = fruitsRepository.find({
    skip: req.pagination.skip,
    limit: req.pagination.limit,
  })
  res.json(fruits)
})

fruitsController.get('/:id', (req, res) => {
  const { id } = req.params
  const fruit = fruitsRepository.findOne({ id: Number(id) })
  res.json(fruit || {})
})
