import { Router, Request, Response } from "express";
import Comment from "../models/Comment";
import Controller from "../interfaces/ControllerInterface";
//import Resource from "../models/Resource";

/**
 * The Comment controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class CommentController implements Controller {
  // Path that is required in order to access the api /api/comments
  public path = "/api/comments";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the Comment Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    this.router
      .route(this.path)
      .get(this.getAllComments)
      .post(this.createComment);
    this.router
      .route(this.path + "/:id")
      .get(this.getComment)
      .put(this.updateComment)
      .delete(this.deleteComment);
    this.router
      .route(this.path + "/addtothread/:parent/:child")
      .put(this.addCommentToThread);
  }

  /**
   * Grabs all Comments in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllComments = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const comment = await Comment.findAll(); // Grabs all Comments
      response.json(comment);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new Comment in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createComment = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const comment = await Comment.create(request.body);
      response.status(201).json({ comment });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Grabs a specific Comment based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getComment = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params;

      const comment = await Comment.findOne({
        where: { id: id },
      });

      if (comment) {
        response.status(200).json(comment);
      } else {
        response
          .status(404)
          .send("Comment with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a Comment based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateComment = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;

      const [updated] = await Comment.update(request.body, {
        where: { id: id },
      });

      if (updated) {
        const updatedComment = await Comment.findOne({ where: { id: id } });
        response.status(200).json({ comment: updatedComment }); //Return the updated Comment
      } else {
        response
          .status(404)
          .send("Comment with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a Comment based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteComment = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const deleted = await Comment.destroy({
        where: { id: id },
      }); // Delete the Comment with the specified id
      const deletedChild = await Comment.destroy({ where: { threadID: id } });
      if (deleted || deletedChild) {
        response.status(204).send("Comment Successdully Deleted");
      } else {
        response
          .status(404)
          .send("Comment with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Modifies a Comment in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  addCommentToThread = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const { parent } = request.params;
      const { child } = request.params;

      //Finds child and parent comment
      const childComment = await Comment.findOne({ where: { id: child } });
      const parentComment = await Comment.findOne({ where: { id: parent } });

      //get parent's id to assign to childs current threadID field
      const newThreadID = parentComment.id;

      const updated = await childComment.update(
        { threadID: newThreadID },
        { where: { child: child } }
      );

      response.status(201).json({ updated });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default CommentController;
