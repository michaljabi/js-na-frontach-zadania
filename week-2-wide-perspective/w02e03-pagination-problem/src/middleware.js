export const paginationMiddleware = function (req, res, next) {
    const {skip, limit} = req.query
    let computedSkip = 0
    if (skip) {
        computedSkip = Number(skip)
    }
    let computedLimit
    if (limit) {
            computedLimit = Number(limit)
    }
    if(computedSkip && computedLimit) {
        res.query = {skip: computedSkip, limit: computedLimit}
    }
    next()
    }


export const getPaginationParamas = (query) => {
    let skip, limit;
    if(query) {
        skip = query.skip
        limit = query.limit
    }
    return {skip: Number(skip) ,limit: Number(limit)}
}