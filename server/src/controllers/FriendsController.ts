import { Router, Request, Response } from "express";
import Friend from "../models/Friend";

/**
 * The resource controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class FriendController {
  // Path that is required in order to access the api http://localhost:8080/routes/api/friends
  public path = "/api/friends";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the friends Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    this.router
      .route(this.path)
      .get(this.getAllFriends)
      .post(this.createFriend);
    this.router
      .route(this.path + "/:id")
      .get(this.getFriend)
      .put(this.updateFriend)
      .delete(this.deleteFriend);
    // Need to add patch
  }

  // Goes to route /api/resources

  /**
   * Grabs all resources in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllFriends = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const resource = await Friend.findAll(); // Grabs all resources
      response.json(resource);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new resources in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createFriend = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const resource = await Friend.create(request.body);
      response.status(201).json({ resource });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/resources/:id

  /**
   * Grabs a specific resources based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getFriend = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const resource = await Friend.findOne({
        where: { id: id },
      }); // Grabs the resources where the id is 0

      if (resource) {
        response.status(200).json(resource);
      } else {
        response
          .status(404)
          .send("Resource with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a resources based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateFriend = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const [updated] = await Friend.update(request.body, {
        where: { id: id },
      }); // Destructure the array so we grab the updated version of our resources

      if (updated) {
        const updatedResource = await Friend.findOne({ where: { id: id } }); // Grab the update resource
        response.status(200).json({ resource: updatedResource }); // Return the updated resources
      } else {
        response
          .status(404)
          .send("Resource with the specified ID does not exist"); // resource does not exist
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a resource based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteFriend = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await Friend.destroy({
        where: { id: id },
      }); // Delete the resource with the specified id
      if (deleted) {
        response.status(204).send("Resource Deleted");
      } else {
        response
          .status(404)
          .send("Resource with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default FriendController;
