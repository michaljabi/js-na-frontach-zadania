export const paginate = function (req, res, next) {
    const { skip, limit } = req.query
    req.paginate = {}
    if (skip) {
      req.paginate.skip = Number(skip)
    }
    if (limit) {
      req.paginate.limit = Number(limit)
    }
      next()
    }