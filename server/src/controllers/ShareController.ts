import { Router, Request, Response } from "express";
import ShareGroup from "../models/ShareGroup";
import ShareResource from "../models/ShareResource";

/**
 * The share controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class ShareController {
  // Path that is required in order to access the api http://localhost:8080/routes/api/share
  public path = "/api/shared";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the Share Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    // Shared Group Method Name
    this.router
      .route(this.path)
      .get(this.getAllShareGroup)
      .post(this.createShareGroup);
    this.router
      .route(this.path + "/:id")
      .get(this.getShareGroup)
      .put(this.updateShareGroup)
      .delete(this.deleteShareGroup);
    // Share Resource Method Names
    this.router
      .get(this.getAllShareResource)
      .post(this.createShareResource);
    this.router
      .route(this.path + "/:id")
      .get(this.getShareResource)
      .put(this.updateShareResource)
      .delete(this.deleteShareResource);
    // Need to add patch
  }

  // Goes to route /api/sharedgroup


//SHARED GROUP SECTION

  /**
   * Grabs all sharedgroup in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllShareGroup = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const sharedgroup = await ShareGroup.findAll(); // Grabs all share groups
      response.json(sharedgroup);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new sharedgroup in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createShareGroup = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const sharedgroup = await ShareGroup.create(request.body);
      response.status(201).json({ sharedgroup });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/sharedgroup/:id

  /**
   * Grabs a specific sharedgroup based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getShareGroup = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const sharedgroup = await ShareGroup.findOne({
        where: { id: id },
      }); // Grabs the sharedgroup where the id is 0

      if (sharedgroup) {
        response.status(200).json(sharedgroup);
      } else {
        response
          .status(404)
          .send("Share Group with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a sharedgroup based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateShareGroup = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const [updated] = await ShareGroup.update(request.body, {
        where: { id: id },
      }); // Destructure the array so we grab the updated version of our sharedgroup

      if (updated) {
        const updatedShareGroup = await ShareGroup.findOne({ where: { id: id } }); // Grab the update sharedgroup
        response.status(200).json({ sharedgroup: updatedShareGroup ); // Return the updated sharedgroup
      } else {
        response
          .status(404)
          .send("Share Group with the specified ID does not exist"); // sharedgroup does not exist
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a sharedgroup based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteShareGroup = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await ShareGroup.destroy({
        where: { id: id },
      }); // Delete the sharedgroup with the specified id
      if (deleted) {
        response.status(204).send("Share Group Deleted");
      } else {
        response
          .status(404)
          .send("Shared Group with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };



//SHARED RESOURCE SECTION



  /**
   * Grabs all sharedgroup in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllShareResource = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const sharedresource = await ShareResource.findAll(); // Grabs all share groups
      response.json(sharedresource);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new sharedgroup in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createShareGroup = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const sharedgroup = await ShareGroup.create(request.body);
      response.status(201).json({ sharedgroup });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/sharedgroup/:id

  /**
   * Grabs a specific sharedgroup based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getShareGroup = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const sharedgroup = await ShareGroup.findOne({
        where: { id: id },
      }); // Grabs the sharedgroup where the id is 0

      if (sharedgroup) {
        response.status(200).json(sharedgroup);
      } else {
        response
          .status(404)
          .send("Share Group with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a sharedgroup based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateShareGroup = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const [updated] = await ShareGroup.update(request.body, {
        where: { id: id },
      }); // Destructure the array so we grab the updated version of our sharedgroup

      if (updated) {
        const updatedShareGroup = await ShareGroup.findOne({ where: { id: id } }); // Grab the update sharedgroup
        response.status(200).json({ sharedgroup: updatedShareGroup ); // Return the updated sharedgroup
      } else {
        response
          .status(404)
          .send("Share Group with the specified ID does not exist"); // sharedgroup does not exist
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a sharedgroup based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteShareGroup = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await ShareGroup.destroy({
        where: { id: id },
      }); // Delete the sharedgroup with the specified id
      if (deleted) {
        response.status(204).send("Share Group Deleted");
      } else {
        response
          .status(404)
          .send("Shared Group with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };














}

export default ShareController;
