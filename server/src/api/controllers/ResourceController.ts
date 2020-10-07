import express, { Router, Request, Response} from 'express';
import { Resource } from '../models/Resource';

/**
 * The resource controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class ResourceController {

    // Path that is required in order to access the api http://localhost:8080/routes/api/resources
    public path = '/api/resources';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    /**
     * Creates the routes for the resource Controller
     * Ex. GET, PUT, POST, UPDATE, etc
     */
    public initializeRoutes() {
        this.router.route(this.path)
            .get(this.getAllResources)
            .post(this.createResource);
        this.router.route(this.path + '/:id')
            .get(this.getResource)
            .put(this.updateResource)
            .delete(this.deleteResource);
            // Need to add patch
    }

    // Goes to route /api/resources

    /**
     * Grabs all resources in the database and sends them as a response in json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAllResources = async (request: Request, response: Response) => {
        try {
            const resource = await Resource.findAll(); // Grabs all resources
            response.json(resource);
        } catch (err) {
            response.status(400).json({ message: 'Something went wrong' });
        }
    }

    /**
     * Creates a new resources in the database if the request has the correct json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    createResource = async (request: Request, response: Response) => {
        try {
            // If missing non-nullable fields it will create an error
            const resource = await Resource.create(request.body);
            response.status(201).json({ resource });
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    // Goes to route /api/resources/:id

    /**
     * Grabs a specific resources based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getResource = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id
            const resource = await Resource.findOne({
                where: {id: id},
            }); // Grabs the resources where the id is 0

            if (resource) {
                response.status(200).json(resource);
            } else {
                response.status(404).send('Resource with the specified ID does not exist');
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }

    /**
     * Updates a resources based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    updateResource = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const [ updated ] = await Resource.update(request.body, {
                where: { id: id}
            }); // Destructure the array so we grab the updated version of our resources

            if (updated) {
                const updatedResource = await Resource.findOne({where: {id: id}}); // Grab the update resource
                response.status(200).json({resource: updatedResource}); // Return the updated resources
            } else {
                response.status(404).send('Resource with the specified ID does not exist'); // resource does not exist
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }


    /**
     * Deletes a resource based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    deleteResource = async (request: Request, response: Response) => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const deleted = await Resource.destroy({
                where: {id: id}
            }); // Delete the resource with the specified id
            if(deleted) {
                response.status(204).send('Resource Deleted');
            } else {
                response.status(404).send('Resource with the specified ID does not exist');
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

export default ResourceController;