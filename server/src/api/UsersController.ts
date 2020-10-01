import express from 'express';
import { User } from './models/User';

/**
 * The user controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
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
            .put(this.updateAUser)
            .delete(this.deleteAUser);
    }

    // Goes to route /api/users

    /**
     * Grabs all users in the database and sends them as a response in json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAllUsers = async (request: express.Request, response: express.Response) => {
        try {
            const user = await User.findAll(); // Grabs all users
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
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    // Goes to route /api/users/:id

    /**
     * Grabs a specific user based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAUser = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id
            const user = await User.findOne({
                where: {userid: id},
            }); // Grabs the user where the id is 0

            if (user) {
                response.status(200).json(user);
            } else {
                response.status(404).send('User with the specified ID does not exist');
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    /**
     * Updates a user based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    updateAUser = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const [ updated ] = await User.update(request.body, {
                where: { userid: id}
            }); // Destructure the array so we grab the updated version of our user

            if (updated) {
                const updatedUser = await User.findOne({where: {userid: id}}); // Grab the update user
                response.status(200).json({user: updatedUser}); // Return the updated user
            } else {
                response.status(404).send('User with the specified ID does not exist'); // User does not exist
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }


    /**
     * Deletes a user based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    deleteAUser = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const deleted = await User.destroy({
                where: {userid: id}
            }); // Delete the user with the specified id
            if(deleted) {
                response.status(204).send('User Deleted');
            } else {
                response.status(404).send('User with the specified ID does not exist');
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

export default UsersController;