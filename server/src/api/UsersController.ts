import express from 'express';

import { User } from './models/User';

/**
 * Our controller which will be responsible for managing the JSON controller object.
 */
class UsersController {

    // Path that is required in order to access the api http://localhost:8080/routes/api/users
    public path = '/api/users';
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
            .get(this.getAllUsers)
            .post(this.createAUser);
        //this.router.route(this.path + '/:id')
            //.get(this.getAUser);
    }

    /*
    getAUser = (request: express.Request, response: express.Response) => {
        const found = users.some(user => user.userID === parseInt(request.params.id, 10));
        if (found) {
            response.json(users.filter(user => user.userID === parseInt(request.params.id, 10)));
        } else {
            response.status(400).json({message: `User with id ${request.params.id} not found`});    
        } 
    }*/

     getAllUsers = async (request: express.Request, response: express.Response) => {
            const user = await User.findAll().catch((err) => {
            response.status(400);
        });
        
        if (user != null) {
            response.json(user);
        } else {
            response.status(400).json({message: 'No registered users'});
        }
    }

    createAUser = async (request: express.Request, response: express.Response) => {
        try {
            // If missing non-nullable fields it will create an error
            const user = await User.create(request.body);
            response.status(201).json({
                user,
            });
        } catch (err) {
            response.status(500).json({error: err.message});
        }
    }

}

export default UsersController;