import express, { Router, Request, Response} from 'express';
import { ResourceType } from '../models/ResourceType';

/**
 * The resource type controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class ResourceTypeController {

    // Path that is required in order to access the api http://localhost:8080/routes/api/resourceType
    public path = '/api/resourceType';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    /**
     * Creates the routes for the ResourceType Controller
     * Ex. GET, PUT, POST, UPDATE, etc
     */
    public initializeRoutes() {
        this.router.route(this.path)
            .get(this.getAllResourceTypes)
            .post(this.createResourceType);
        this.router.route(this.path + '/:id')
            .get(this.getResourceType)
            .put(this.updateResourceType)
            .delete(this.deleteResourceType);
    }

    // Goes to route /api/resourceType

    /**
     * Grabs all resource types in the database and sends them as a response in json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAllResourceTypes = async (request: Request, response: Response) => {
        try {
            const resourceType = await ResourceType.findAll(); // Grabs all resource types
            response.json(resourceType);
        } catch (err) {
            response.status(400).json({ message: 'Something went wrong' });
        }
    }

    /**
     * Creates a new resource type in the database if the request has the correct json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    createResourceType = async (request: Request, response: Response) => {
        try {
            // If missing non-nullable fields it will create an error
            const resourceType = await ResourceType.create(request.body);
            response.status(201).json({ resourceType });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    
    /**
     * Grabs a specific resource type based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getResourceType = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id

            const resourceType = await ResourceType.findOne({
                where: {id: id},
            }); // Grabs the resource type where the id is 0

            if (resourceType) {
                response.status(200).json(resourceType);
            } else {
                response.status(404).send('Resource Type with the specified ID does not exist');
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    /**
     * Updates a resource type based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    updateResourceType = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request

            const [ updated ] = await ResourceType.update(request.body, {
                where: { id: id}
            }); // Destructure the array so we grab the updated version of our resource type

            if (updated) {
                const updatedResourceType = await ResourceType.findOne({where: {id: id}}); // Grab the update resource type
                response.status(200).json({resourceType: updatedResourceType}); // Return the updated resource type
            } else {
                response.status(404).send('Resource Type with the specified ID does not exist'); // Resource type does not exist
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }


    /**
     * Deletes a resource type based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    deleteResourceType = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const deleted = await ResourceType.destroy({
                where: {id: id}
            }); // Delete the resource type with the specified id
            if(deleted) {
                response.status(204).send('ResourceType Deleted');
            } else {
                response.status(404).send('Resource Type with the specified ID does not exist');
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

export default ResourceTypeController;