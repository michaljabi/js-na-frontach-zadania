export const pagination =
  (
    { limitKey = "limit", skipKey = "skip" } = {
      limitKey: "limit",
      skipKey: "skip",
    }
  ) =>
  (req, res, next) => {
    if (req.query[skipKey]) req.skip = Number(req.query[skipKey]);
    if (req.query[limitKey]) req.limit = Number(req.query[limitKey]);
    next();
  };
