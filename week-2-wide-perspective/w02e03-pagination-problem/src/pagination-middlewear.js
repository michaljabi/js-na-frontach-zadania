export const paginate = (model, skip) => {
  return (req, res, next) => {
    const { skip, limit } = req.query;
    let computedSkip = 0;
    if (skip) {
      computedSkip = Number(skip);
    }
    let computedLimit;
    if (limit) {
      computedLimit = Number(limit);
    }
    const users = model.find({
      skip: computedSkip,
      limit: computedLimit,
    });

    res.result = users;

    next();
  };
};
