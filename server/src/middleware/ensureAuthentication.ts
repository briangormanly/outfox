import { Request, Response, NextFunction } from 'express';

const ensureAuthentication = (req: Request, res: Response, next: NextFunction) => {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.json({error: 'No authentication'});
    }
}

export default ensureAuthentication;