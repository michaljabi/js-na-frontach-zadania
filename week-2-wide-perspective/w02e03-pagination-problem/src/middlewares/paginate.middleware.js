export function paginate(skipKey = 'skip', limitKey = 'limit') {
    return (req, res, next) => {
        const { [skipKey]: skip, [limitKey]: limit } = req.query
        let computedSkip = 0
        if (skip) {
            computedSkip = Number(skip)
        }
        let computedLimit
        if (limit) {
            computedLimit = Number(limit)
        }
        req.pagination = {
            skip: computedSkip,
            limit: computedLimit,
        }
        next()
    }
}
