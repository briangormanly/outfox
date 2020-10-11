import { Request, Response, NextFunction } from "express";
import passport from "./passportConfig";
import User from "../models/User";

function validLogin(req: Request, res: Response, next: NextFunction): void {
  passport.authenticate("local", (err: Error, user: User) => {
    if (err) throw err;
    if (!user) {
      res.sendStatus(404);
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json({ user });
      });
    }
  })(req, res, next);
}

export default validLogin;
