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
        this.router.route(this.path + '/:id')
            .get(this.getAUser)
            .put(this.updateAUser);
    }

    /**
     * Grabs a specific user based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAUser = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const user = await User.findOne({
                where: {userid: id},
            });

            if (user) {
                response.status(200).json(user);
            } else {
                response.status(404).send('User with the specified ID does not exist');
            }
        } catch (err) {
            response.status(500).send(err.message);
        }
    }

    /**
     * Grabs all users in the database and sends them as a response in json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAllUsers = async (request: express.Request, response: express.Response) => {
        try {
            const user = await User.findAll();
            response.json(user);
        } catch (err) {
            response.status(400).json({ message: 'No registered users' });
        }
    }

    /**
     * Creates a new user in the database if the request has the correct json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    createAUser = async (request: express.Request, response: express.Response) => {
        try {
            // If missing non-nullable fields it will create an error
            const user = await User.create(request.body);
            response.status(201).json({ user });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    }

    updateAUser = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const [ updated ] = await User.update(request.body, {
                where: { userid: id}
            });

            if (updated) {
                const updatedUser = await User.findOne({where: {userid: id}});
                response.status(200).json({user: updatedUser});
            } else {
                response.status(404).json({error: 'User not found'});
            }
        } catch (err) {
            response.status(500).send(err.message);
        }
    }
}

export default UsersController;