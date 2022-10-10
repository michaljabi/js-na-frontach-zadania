export const  paginate = ({skipParamName, limitParamName}) => (req, res, next) => {
  const skip = req[skipParamName]
  const limit = req[limitParamName]
  // const { skip, limit } = req.query;
    let computedSkip = 0;

    if (skip) {
      computedSkip = Number(skip);
    }

    let computedLimit;

    if (limit) {
      computedLimit = Number(limit);
    }

    req.paginate = {
      limit: computedLimit,
      skip: computedSkip
    }
    next()
};
