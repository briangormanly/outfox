import { Router, Request, Response } from "express";
import LinkOwnerType from "../models/LinkOwnerType";

/**
 * The linkOwnerType controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class LinkOwnerTypeController {
  // Path that is required in order to access the api http://localhost:8080/routes/api/users
  public path = "/api/linkownertypes";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the User Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    this.router
      .route(this.path)
      .get(this.getAllLinkOwnerType)
      .post(this.createLinkOwnerType);
    this.router.route(this.path + "/:id").get(this.getLinkOwnerType);
  }

  // Goes to route /api/LinkOwnerType

  /**
   * Grabs all LinkOwnerType in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllLinkOwnerType = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const linkOwnerType = await LinkOwnerType.findAll(); // Grabs all linkOwnerType
      response.json(linkOwnerType);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new LinkOwnerType in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createLinkOwnerType = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const linkOwnerType = await LinkOwnerType.create(request.body);
      response.status(201).json({ linkOwnerType });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Grabs a specific LinkOwnerType based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getLinkOwnerType = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id

      const user = await LinkOwnerType.findOne({
        where: { id: id },
      }); // Grabs the user where the id is 0

      if (user) {
        response.status(200).json(user);
      } else {
        response
          .status(404)
          .send("LinkOwnerType with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default LinkOwnerTypeController;
