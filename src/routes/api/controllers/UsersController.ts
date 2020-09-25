import { users } from '../../../dummy data/users';
import express from 'express';

/**
 * Our controller which will be responsible for managing the JSON controller object.
 */
class UsersController {

    // Path that is required in order to access the api http://localhost:8080/routes/api/users
    public path = '/routes/api/users';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    /**
     * Creates the routes for the User Controller
     * Ex. GET, PUT, POST, UPDATE, etc
     */
    public initializeRoutes() {
        this.router.route(this.path)
            .get(this.getAllUsers);
        
        this.router.route(this.path + '/:id')
            .get(this.getAUser);
    }

    getAUser = (request: express.Request, response: express.Response) => {
        const found = users.some(user => user.userID === parseInt(request.params.id));
        if (found) {
            response.json(users.filter(user => user.userID === parseInt(request.params.id)));
        } else {
            response.status(400).json({message: `User with id ${request.params.id} not found`});    
        } 
    }

    getAllUsers = (request: express.Request, response: express.Response) => {
        if(users.length > 0) {
            response.json(users);
        } else {
            response.status(400).json({message: 'No registered users'});
        }
    }

    createAUser = (request: express.Request, response: express.Response) => {
        response.status(400);
    }
}

export default UsersController;