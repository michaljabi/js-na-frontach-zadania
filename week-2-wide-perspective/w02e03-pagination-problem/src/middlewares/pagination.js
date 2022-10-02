export const pagination =
  (customSkip = "skip", customLimit = "limit") =>
  (req, res, next) => {
    const { [customSkip]: skip, [customLimit]: limit } = req.query;
    let computedSkip = 0;
    if (skip) {
      computedSkip = Number(skip);
    }
    let computedLimit;
    if (limit) {
      computedLimit = Number(limit);
    }
    req.computedSkip = computedSkip;
    req.computedLimit = computedLimit;

    next();
  };
