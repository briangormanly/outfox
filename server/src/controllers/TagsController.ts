import { Router, Request, Response } from "express";
import Tag from "../models/Tag";
import Controller from "../interfaces/ControllerInterface";

/**
 * The tags controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class TagsController implements Controller {
  // Path that is required in order to access the api /routeshttp://localhost:8080/api/tags
  public path = "http://localhost:8080/api/tags";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the Tag Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    this.router.route(this.path).get(this.getAllTags).post(this.createTag);
    this.router
      .route(this.path + "/:id")
      .get(this.getTag)
      .put(this.updateTag)
      .delete(this.deleteTag);
  }

  // Goes to route http://localhost:8080/api/tags

  /**
   * Grabs all tags in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllTags = async (request: Request, response: Response): Promise<void> => {
    try {
      const tag = await Tag.findAll(); // Grabs all tags
      response.json(tag);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new tag in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createTag = async (request: Request, response: Response): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const tag = await Tag.create(request.body);
      response.status(201).json({ tag });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Grabs a specific tag based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getTag = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id

      const tag = await Tag.findOne({
        where: { id: id },
      }); // Grabs the tag where the id is 0

      if (tag) {
        response.status(200).json(tag);
      } else {
        response.status(404).send("Tag with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a tag based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateTag = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      
      // check if there is an id that matches the id in request
      const [updated] = await Tag.update(request.body, {
        where: { id: id },
      }); // Destructure the array so we grab the updated version of our tag

      if (updated) {
        const updatedTag = await Tag.findOne({ where: { id: id } }); // Grab the update tag
        response.status(200).json({ tag: updatedTag }); // Return the updated tag
      } else {
        response.status(404).send("Tag with the specified ID does not exist"); // Tag does not exist
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a tag based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteTag = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await Tag.destroy({
        where: { id: id },
      }); // Delete the tag with the specified id
      if (deleted) {
        response.status(204).send("Tag Deleted");
      } else {
        response.status(404).send("Tag with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default TagsController;
