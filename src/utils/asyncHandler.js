const asyncHandler = () => {
  (req, res, next) => {
    Promise.resolve(requesrHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
