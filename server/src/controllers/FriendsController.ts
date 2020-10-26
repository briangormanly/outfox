import { Router, Request, Response } from "express";
import Friend from "../models/Friend";
import { request } from "http";

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
      .route(this.path + "/:id")
      .get(this.getFriend)
      .put(this.updateFriend)
      .delete(this.deleteFriend);
    // Need to add patch
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

  getUserFriends = async (
      request: Request,
      response: Response
    ): Promise<void> => {
      const {id} = request.params;
      try{
        const userRequestedFriends = await Friend.findAll({where:{requesterid:id, status:"a"}})
        const userAcceptedFriends = await Friend.findAll({where:{addresseeid:id, status:"a"}})

        const userRequestedFriendsToFriendIds = userRequestedFriends.map(friend=>friend.addresseeid);
        const userAcceptedFriendsToFriendIds = userAcceptedFriends.map(friend=>friend.requesterid);

        const allUserFriends = [...userRequestedFriendsToFriendIds, ...userAcceptedFriendsToFriendIds];

        response.status(201).json(allUserFriends);

      } catch(err){

      response.status(400).json({ message: "Something went wrong" });
      }
    }

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
      const friend = await Friend.create(request.body);
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
      const { id } = request.params; // Destructure the request.params object and grab only id
      const friend = await Friend.findOne({
        where: { id: id },
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
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const [updated] = await Friend.update(request.body, {
        where: { id: id },
      }); // Destructure the array so we grab the updated version of our friends

      if (updated) {
        const updatedFriend = await Friend.findOne({ where: { id: id } }); // Grab the update friend
        response.status(200).json({ friend: updatedFriend }); // Return the updated friend
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
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await Friend.destroy({
        where: { id: id },
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
}

export default FriendController;
