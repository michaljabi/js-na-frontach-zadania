function paginationMiddlewareLogic(
    request,
    next,
    paginationParamsNames = {
      skipParamName: 'skip',
      limitParamName: 'limit'
    }) {
  const { skipParamName, limitParamName } = paginationParamsNames;
  const skip = request.query?.[skipParamName];
  const limit = request.query?.[limitParamName];
  const computedSkip = skip ? Number(skip) : 0;
  const computedLimit = limit ? Number(limit) : null;

  request.pagination = {
    skip: computedSkip,
    ...(computedLimit && {limit: computedLimit}),
  }

  next()
}

export function paginationMiddleware(...args) {
  if (args[0].skipParamName || args[0].limitParamName) {
    return function (request, response, next) {
      return paginationMiddlewareLogic(request, next, args[0])
    }
  }

  const [response, , next] = args;
  return paginationMiddlewareLogic(response, next)
}