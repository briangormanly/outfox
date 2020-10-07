import express, { Router, Request, Response} from 'express';
import { Group } from '../models/Group';
import User from '../models/User';

/**
 * The user controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class UsersController {

    // Path that is required in order to access the api http://localhost:8080/routes/api/users
    public path = '/api/users';
    public router = Router();

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
            .post(this.createUser);
        this.router.route(this.path + '/:id')
            .get(this.getUser)
            .put(this.updateUser)
            .delete(this.deleteUser);
        this.router.route(this.path + '/userandgroups/' + ':id')
            .get(this.getUserAndGroups);
    }

    // Goes to route /api/users

    /**
     * Grabs all users in the database and sends them as a response in json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAllUsers = async (request: Request, response: Response) => {
        try {
            const user = await User.findAll(); // Grabs all users
            response.json(user);
        } catch (err) {
            response.status(400).json({ message: 'Something went wrong' });
        }
    }

    /**
     * Creates a new user in the database if the request has the correct json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    createUser = async (request: Request, response: Response) => {
        try {
            // If missing non-nullable fields it will create an error
            const user = await User.create(request.body);
            response.status(201).json({ user });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    // Goes to route /api/users/:id

    getUserAndGroups = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id
            const user = await User.findOne({
                where: {id: id},
                include: Group
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
     * Grabs a specific user based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getUser = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id

            const user = await User.findOne({
                where: {id: id},
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
    updateUser = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request

            const [ updated ] = await User.update(request.body, {
                where: { id: id}
            }); // Destructure the array so we grab the updated version of our user

            if (updated) {
                const updatedUser = await User.findOne({where: {id: id}}); // Grab the update user
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
    deleteUser = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const deleted = await User.destroy({
                where: {id: id}
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
