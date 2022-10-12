export function paginationMiddleware(request, response, next) {
  const { skip, limit } = request.query
  let computedSkip = 0
  if (skip) {
    computedSkip = Number(skip)
  }
  let computedLimit
  if (limit) {
    computedLimit = Number(limit)
  }
  request.pagination = {
    skip: computedSkip,
    ...(computedLimit && { limit: computedLimit }),
  }

  next()
}