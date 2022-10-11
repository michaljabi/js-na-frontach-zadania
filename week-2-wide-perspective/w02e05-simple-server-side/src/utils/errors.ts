import { ErrorFormatter } from 'express-validator'

export const errorFormatter: ErrorFormatter = ({ param, msg}) => ({ [param]: msg })