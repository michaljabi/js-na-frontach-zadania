const paginationLimitKeys = ["size", "limit", "per_page"];
const paginationSkipKeys = ["skip", "offset", "ignore"];

export const pagination = (req, res, next) => {
  const limitKey = Object.keys(req.query).find((el) =>
    paginationLimitKeys.some((key) => key === el)
  );
  const skipKey = Object.keys(req.query).find((el) =>
    paginationSkipKeys.some((key) => key === el)
  );

  req.pagination = {
    limit: req.query[limitKey] ? Number(req.query[limitKey]) : undefined,
    skip: req.query[skipKey] ? Number(req.query[skipKey]) : 0,
  };
  next();
};
