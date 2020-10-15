import { Request, Response, NextFunction } from "express";

const ensureAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.json({ error: "No authentication" });
  }
};

export default ensureAuthentication;
