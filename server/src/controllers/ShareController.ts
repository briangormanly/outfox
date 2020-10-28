import { Router, Request, Response } from "express";
import ShareGroup from "../models/ShareGroup";
import ShareResource from "../models/ShareResource";
import Controller from "../interfaces/ControllerInterface";
import Group from "../models/Group";
import User from "../models/User";

/**
 * The share controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class ShareController implements Controller {
  // Path that is required in order to access the api http://localhost:8080/routes/api/share
  public path = "/api/share";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the Share Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    // Share Group Routes
    this.router
      .route(this.path + "/group")
      .post(this.createShareGroup);
    this.router
      .route(this.path + "/group" + "/:id")
      .get(this.getSharedGroups)
      // .delete(this.deleteShareGroup);

    // Share Resource Routes
    // this.router
    //   .route(this.path + "/resource")
    //   .post(this.createShareResource);
    // this.router
    //   .route(this.path + "/resource" + "/:id")
    //   .get(this.getShareResource)
    //   .delete(this.deleteShareResource);
  }

//SHARED GROUP SECTION
// route: api/share/group

/**
 * Add new shared group relationship
 * @param request HTTP browser request
 * @param response HTTP browser response
 */
createShareGroup = async (request: Request, response: Response): Promise<void> => {
  try {

    const newShare = await ShareGroup.create(request.body);
      response.status(200).json({ newShare });

  } catch (err) {

    response.status(500).send(err.message);

  }
};

  // Goes to route /api/sharedgroup/:id

  /**
   * Get groups shared to a users based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getSharedGroups = async (request: Request, response: Response): Promise<void> => {
    try {

      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const sharedGroups = await ShareGroup.findAll({
        where: { UserId : id },
        include: Group,
      }); // Search for the groups shared with user X {X = params:id}

      if (sharedGroups) {
        response.status(200).json(sharedGroups);

      } else {

        response.status(404).send("Not shared with you.");
      }

    } catch (err) {

      response.status(500).send(err.message);

    }
  };
//
//
//   /**
//    * Updates a sharedgroup based off the ID provided
//    * @param request HTTP browser request
//    * @param response HTTP browser response
//    */
//   updateShareGroup = async (
//     request: Request,
//     response: Response
//   ): Promise<void> => {
//     try {
//       const { id } = request.params; // Destructure the object to only grab the id coming from the request
//       const [updated] = await ShareGroup.update(request.body, {
//         where: { id: id },
//       }); // Destructure the array so we grab the updated version of our sharedgroup
//
//       if (updated) {
//         const updatedShareGroup = await ShareGroup.findOne({ where: { id: id } }); // Grab the update sharedgroup
//         response.status(200).json({ sharedgroup: updatedShareGroup ); // Return the updated sharedgroup
//       } else {
//         response
//           .status(404)
//           .send("Share Group with the specified ID does not exist"); // sharedgroup does not exist
//       }
//     } catch (error) {
//       response.status(500).send(error.message);
//     }
//   };
//
//   /**
//    * Deletes a sharedgroup based off the ID provided
//    * @param request HTTP browser request
//    * @param response HTTP browser response
//    */
//   deleteShareGroup = async (
//     request: Request,
//     response: Response
//   ): Promise<void> => {
//     try {
//       const { id } = request.params; // Destructure the object to only grab the id coming from the request
//       const deleted = await ShareGroup.destroy({
//         where: { id: id },
//       }); // Delete the sharedgroup with the specified id
//       if (deleted) {
//         response.status(204).send("Share Group Deleted");
//       } else {
//         response
//           .status(404)
//           .send("Shared Group with the specified ID does not exist");
//       }
//     } catch (error) {
//       response.status(500).send(error.message);
//     }
//   };
//
//
//
// //SHARED RESOURCE SECTION
//
//
//
//   /**
//    * Grabs all sharedresource in the database and sends them as a response in json
//    * @param request HTTP browser request
//    * @param response HTTP browser response
//    */
//   getAllShareResource = async (
//     request: Request,
//     response: Response
//   ): Promise<void> => {
//     try {
//       const sharedresource = await ShareResource.findAll(); // Grabs all share resource
//       response.json(sharedresource);
//     } catch (err) {
//       response.status(400).json({ message: "Something went wrong" });
//     }
//   };
//
//   /**
//    * Creates a new sharedresource in the database if the request has the correct json
//    * @param request HTTP browser request
//    * @param response HTTP browser response
//    */
//   createShareResource = async (
//     request: Request,
//     response: Response
//   ): Promise<void> => {
//     try {
//       // If missing non-nullable fields it will create an error
//       const sharedresource = await ShareResource.create(request.body);
//       response.status(201).json({ sharedresource });
//     } catch (error) {
//       response.status(500).send(error.message);
//     }
//   };
//
//   // Goes to route /api/sharedresource/:id
//
//   /**
//    * Grabs a specific sharedresource based off the ID provided
//    * @param request HTTP browser request
//    * @param response HTTP browser response
//    */
//   getShareResource = async (request: Request, response: Response): Promise<void> => {
//     try {
//       const { id } = request.params; // Destructure the request.params object and grab only id
//       const sharedresource = await ShareResource.findOne({
//         where: { id: id },
//       }); // Grabs the sharedresource where the id is 0
//
//       if (sharedresource) {
//         response.status(200).json(sharedresource);
//       } else {
//         response
//           .status(404)
//           .send("Share Resource with the specified ID does not exist");
//       }
//     } catch (error) {
//       response.status(500).send(error.message);
//     }
//   };
//
//   /**
//    * Updates a sharedresource based off the ID provided
//    * @param request HTTP browser request
//    * @param response HTTP browser response
//    */
//   updateShareResource = async (
//     request: Request,
//     response: Response
//   ): Promise<void> => {
//     try {
//       const { id } = request.params; // Destructure the object to only grab the id coming from the request
//       const [updated] = await ShareResource.update(request.body, {
//         where: { id: id },
//       }); // Destructure the array so we grab the updated version of our sharedresource
//
//       if (updated) {
//         const updatedShareResource = await ShareResource.findOne({ where: { id: id } }); // Grab the update sharedresource
//         response.status(200).json({ sharedresource: updatedShareResource ); // Return the updated sharedresource
//       } else {
//         response
//           .status(404)
//           .send("Share Resource with the specified ID does not exist"); // sharedresource does not exist
//       }
//     } catch (error) {
//       response.status(500).send(error.message);
//     }
//   };
//
//   /**
//    * Deletes a sharedresource based off the ID provided
//    * @param request HTTP browser request
//    * @param response HTTP browser response
//    */
//   deleteShareResource = async (
//     request: Request,
//     response: Response
//   ): Promise<void> => {
//     try {
//       const { id } = request.params; // Destructure the object to only grab the id coming from the request
//       const deleted = await ShareResource.destroy({
//         where: { id: id },
//       }); // Delete the sharedresource with the specified id
//       if (deleted) {
//         response.status(204).send("Share Resource Deleted");
//       } else {
//         response
//           .status(404)
//           .send("Shared Resource with the specified ID does not exist");
//       }
//     } catch (error) {
//       response.status(500).send(error.message);
//     }
//   };
//
}

export default ShareController;
