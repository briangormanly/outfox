import { Router, Request, Response } from "express";
import ShareGroup from "../models/ShareGroup";
import ShareResource from "../models/ShareResource";
import ShareLessons from "../models/ShareLessons";
import ShareAssignments from "../models/ShareAssignments";
import Controller from "../interfaces/ControllerInterface";

/**
 * The share controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class ShareController implements Controller {
  // Path that is required in order to access the api /routes/api/share/...
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
    this.router.route(this.path + "/group").post(this.createShareGroup);
    this.router
      .route(this.path + "/group" + "/:id")
      .get(this.getSharedGroups)
      .delete(this.deleteShareGroup);

    // Share Resource Routes
    this.router.route(this.path + "/resource").post(this.createShareResource);
    this.router
      .route(this.path + "/resource" + "/:id")
      .get(this.getSharedResources)
      .delete(this.deleteShareResource);

    // Share Assignments Routes

    // Share Lessons Routes
    this.router.route(this.path + "/lessons").post(this.createShareLessons);
    this.router
      .route(this.path + "/lessons" + "/:id")
      .get(this.getSharedLessons)
      .delete(this.deleteShareLessons);

  }

  // SHARED GROUP SECTION
  // route: api/share/group

  /**
   * Add new shared group relationship
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createShareGroup = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const newShare = await ShareGroup.create(request.body);
      response.status(200).json(newShare);
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
  getSharedGroups = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const sharedGroups = await ShareGroup.findAll({
        attributes: { exclude: ["GroupId", "Sharedby", "UserId"] },
        where: { UserId: id },
        include: [
          {
            association: "SharedFrom",
            attributes: { exclude: ["hashpw", "country", "city", "phonenum"] },
          },
          {
            association: "GroupShared",
          },
        ],
        //include: ["SharedFrom", "SharedTo", "GroupShared"],
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
        where: { SharedID: id },
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

  // Goes to route /api/share/resource

  /**
   * Creates a new sharedresource in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createShareResource = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const sharedresource = await ShareResource.create(request.body);
      response.status(201).json({ sharedresource });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/share/resource/:id

  /**
   * Grabs a specific sharedresource based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getSharedResources = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const sharedResource = await ShareResource.findAll({
        attributes: { exclude: ["ResourceId", "Sharedby", "UserId"] },
        where: { UserId: id },
        include: [
          {
            association: "SharedFrom",
            attributes: { exclude: ["hashpw", "country", "city", "phonenum"] },
          },
          {
            association: "ResourceShared",
          },
        ],
        //include: ["SharedFrom", "SharedTo", "GroupShared"],
      }); // Grabs the sharedresource baed on the specific 'id' of a user

      if (sharedResource) {
        response.status(200).json(sharedResource);
      } else {
        response
          .status(404)
          .send("Share Resource with the specified ID does not exist");
      }
    } catch (err) {
      response.status(500).send(err.message);
    }
  };

  /**
   * Deletes a sharedresource based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteShareResource = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const deleted = await ShareResource.destroy({
        where: { ShareResourceId: id },
      }); // Delete the sharedresource with the specified id

      if (deleted) {
        response.status(204).send("Share Resource Deleted");
      } else {
        response
          .status(404)
          .send("Shared Resource with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // SHARED ASSIGNMENTS SECTION
  // route: /api/share/assignments
  createShareAssignments = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const sharedAssignment = await ShareAssignments.create(request.body);
      response.status(201).json({ sharedAssignment });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/share/assignmentss/:id

  /**
   * Grabs a specific sharedresource based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getSharedAssignments = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const sharedAssignment = await ShareAssignments.findAll({
        attributes: { exclude: ["SharedId", "Sharedby", "UserId"] },
        where: { UserId: id },
        include: [
          {
            association: "SharedFrom",
            attributes: { exclude: ["hashpw", "country", "city", "phonenum"] },
          },
          {
            association: "AssignmentShared",
          },
        ],
        //include: ["SharedFrom", "SharedTo", "GroupShared"],
      }); // Grabs the sharedlesson based on the specific 'id' of a user

      if (sharedAssignment) {
        response.status(200).json(sharedAssignment);
      } else {
        response
          .status(404)
          .send("Share Assignment with the specified ID does not exist");
      }
    } catch (err) {
      response.status(500).send(err.message);
    }
  };

  /**
   * Deletes a sharedassignment based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteSharedAssignments = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const deleted = await ShareAssignments.destroy({
        where: { ShareAssignmentId: id },
      }); // Delete the sharedassignment with the specified id

      if (deleted) {
        response.status(204).send("Share Assignment Deleted");
      } else {
        response
          .status(404)
          .send("Shared Assignment with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // SHARED LESSONS SECTION
  // route: /api/share/lessons
  createShareLessons = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const sharedlesson = await ShareLessons.create(request.body);
      response.status(201).json({ sharedlesson });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/share/lessons/:id

  /**
   * Grabs a specific sharedresource based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getSharedLessons = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const sharedLesson = await ShareLessons.findAll({
        attributes: { exclude: ["SharedId", "Sharedby", "UserId"] },
        where: { UserId: id },
        include: [
          {
            association: "SharedFrom",
            attributes: { exclude: ["hashpw", "country", "city", "phonenum"] },
          },
          {
            association: "LessonShared",
          },
        ],
        //include: ["SharedFrom", "SharedTo", "GroupShared"],
      }); // Grabs the sharedlesson based on the specific 'id' of a user

      if (sharedLesson) {
        response.status(200).json(sharedLesson);
      } else {
        response
          .status(404)
          .send("Share Lesson with the specified ID does not exist");
      }
    } catch (err) {
      response.status(500).send(err.message);
    }
  };

  /**
   * Deletes a sharedlesson based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteShareLessons = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const deleted = await ShareLessons.destroy({
        where: { ShareLessonId: id },
      }); // Delete the sharedlesson with the specified id

      if (deleted) {
        response.status(204).send("Share Lesson Deleted");
      } else {
        response
          .status(404)
          .send("Shared Lesson with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default ShareController;
