import { Router } from 'express'
import { fruitsRepository } from './fruits.repository.js'
import {getPaginationParamas} from "../middleware.js"

export const fruitsController = new Router()

fruitsController.get('', (req, res) => {
  const { skip, limit } = getPaginationParamas(req.query)
  const fruits = fruitsRepository.find({
    skip: skip ? skip: 0,
    limit: limit ? limit: undefined,
  })
  res.json(fruits)
})

fruitsController.get('/:id', (req, res) => {
  const { id } = req.params
  const fruit = fruitsRepository.findOne({ id: Number(id) })
  res.json(fruit || {})
})
