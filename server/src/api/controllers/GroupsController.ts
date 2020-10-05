import express, { Router, Request, Response} from 'express';
import { Group } from '../models/Group';

/**
 * The group controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class GroupsController {

    // Path that is required in order to access the api http://localhost:8080/routes/api/groups
    public path = '/api/groups';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    /**
     * Creates the routes for the Group Controller
     * Ex. GET, PUT, POST, UPDATE, etc
     */
    public initializeRoutes() {
        this.router.route(this.path)
            .get(this.getAllGroups)
            .post(this.createGroup);
        this.router.route(this.path + '/:id')
            .get(this.getGroup)
            .put(this.updateGroup)
            .delete(this.deleteGroup);
            // Need to add patch
    }

    // Goes to route /api/groups

    /**
     * Grabs all groups in the database and sends them as a response in json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAllGroups = async (request: Request, response: Response) => {
        try {
            const group = await Group.findAll(); // Grabs all groups
            response.json(group);
        } catch (err) {
            response.status(400).json({ message: 'Something went wrong' });
        }
    }

    /**
     * Creates a new group in the database if the request has the correct json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    createGroup = async (request: Request, response: Response) => {
        try {
            // If missing non-nullable fields it will create an error
            const group = await Group.create(request.body);
            response.status(201).json({ group });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    // Goes to route /api/groups/:id

    /**
     * Grabs a specific group based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getGroup = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id
            const group = await Group.findOne({
                where: {groupid: id},
            }); // Grabs the group where the id is 0

            if (group) {
                response.status(200).json(group);
            } else {
                response.status(404).send('Group with the specified ID does not exist');
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    /**
     * Updates a group based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    updateGroup = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const [ updated ] = await Group.update(request.body, {
                where: { groupid: id}
            }); // Destructure the array so we grab the updated version of our group

            if (updated) {
                const updatedGroup = await Group.findOne({where: {groupid: id}}); // Grab the update group
                response.status(200).json({group: updatedGroup}); // Return the updated group
            } else {
                response.status(404).send('Group with the specified ID does not exist'); // group does not exist
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }


    /**
     * Deletes a group based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    deleteGroup = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const deleted = await Group.destroy({
                where: {groupid: id}
            }); // Delete the group with the specified id
            if(deleted) {
                response.status(204).send('Group Deleted');
            } else {
                response.status(404).send('Group with the specified ID does not exist');
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

export default GroupsController;
