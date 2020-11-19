import { Router, Request, Response } from "express";
import Friend from "../models/Friend";
import { Op } from "sequelize";
import User from "../models/User";
import sequelize from "../middleware/databaseConnection";

/**
 * The friend controller is responsible for handling the HTTP requests.
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
      .route(this.path + "/:friendRequestid")
      .get(this.getFriend)
      .put(this.updateFriend)
      .delete(this.deleteFriend);
    this.router.route(this.path + "/accepted/:id").get(this.getAcceptedFriends);
    this.router.route(this.path + "/pending/:id").get(this.getPendingRequests);
  }

  // Goes to route /api/friends

  /**
   * Grabs all friends in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllFriends = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const friend = await Friend.findAll(); // Grabs all friends
      response.json(friend);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new friends in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createFriend = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const friend = await sequelize.transaction(async (t) => {
        //makes transaction that will auto rollback if error occurs
        const friend = await Friend.create((request.body),{ transaction: t });
        return friend;
      });
      response.status(201).json({ friend });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/friends/:id

  /**
   * Grabs a specific friends based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getFriend = async (request: Request, response: Response): Promise<void> => {
    try {
      const { friendRequestid } = request.params; // Destructure the request.params object and grab only id
      console.log(friendRequestid);
      const friend = await Friend.findOne({
        where: { friendRequestid: friendRequestid },
      }); // Grabs the friends where the id is 0

      if (friend) {
        response.status(200).json(friend);
      } else {
        response
          .status(404)
          .send("Friend with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a friend based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateFriend = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { friendRequestid } = request.params; // Destructure the object to only grab the id coming from the request
      const [updated] = await Friend.update(request.body, {
        where: { friendRequestid: friendRequestid },
      }); // Destructure the array so we grab the updated version of our friends

      if (updated) {
        const updatedFriend = await Friend.findOne({
          where: { friendRequestid: friendRequestid },
        }); // Grab the update friend
        response.status(200).json(updatedFriend); // Return the updated friend
      } else {
        response
          .status(404)
          .send("Friend with the specified ID does not exist"); // friend does not exist
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a friend based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteFriend = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { friendRequestid } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await Friend.destroy({
        where: { friendRequestid: friendRequestid },
      }); // Delete the friend with the specified id
      if (deleted) {
        response.status(204).send("Friend Deleted");
      } else {
        response
          .status(404)
          .send("Friend with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  //---------------
  /**
   * Grabs all friends in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getFriends = async (request: Request, response: Response): Promise<void> => {
    try {
      const friend = await Friend.findAll(); // Grabs all friends
      response.json(friend);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Grabs only friends that have been accepted
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAcceptedFriends = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params;
      const friend = await Friend.findAll({
        attributes: { exclude: ["requesterid", "addresseeid", "status"] },
        where: {
          [Op.or]: [{ requesterid: id }, { addresseeid: id }],
          [Op.and]: { status: "a" },
        },
        include: [
          {
            association: "RequestSentFrom",
            attributes: {
              exclude: ["hashpw", "country", "city", "phonenum"],
            },
          },
          {
            association: "RequestSentTo",
            attributes: {
              exclude: ["hashpw", "country", "city", "phonenum"],
            },
          },
        ],
      }); // Grabs the friends where the id is 0

      if (friend) {
        response.status(200).json(friend);
      } else {
        response
          .status(404)
          .send("Friend with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Grabs pending requests
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getPendingRequests = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { friendRequestid } = request.params; // Destructure the request.params object and grab only id
      const friend = await Friend.findAll({
        attributes: { exclude: ["requesterid", "addresseeid", "status"] },
        where: {
          [Op.or]: [
            { requesterid: friendRequestid },
            { addresseeid: friendRequestid },
          ],
          [Op.and]: { status: "p" },
        },
        include: {
          model: User,
          attributes: {
            exclude: ["hashpw", "country", "city", "phonenum"],
          },
        },
      }); // Grabs the friends where the id is 0

      if (friend) {
        response.status(200).json(friend);
      } else {
        response
          .status(404)
          .send("Friend with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default FriendController;
