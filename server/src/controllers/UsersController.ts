import { Router, Request, Response } from "express";
import Group from "../models/Group";
import User from "../models/User";
import Controller from "../interfaces/ControllerInterface";
import Resource from "../models/Resource";
import Friend from "../models/Friend";
import sequelize from "../middleware/databaseConnection";
/**
 * The user controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class UsersController implements Controller {
  // Path that is required in order to access the api http://localhost:8080/routes/api/users
  public path = "/api/users";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the User Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    this.router.route(this.path).get(this.getAllUsers).post(this.createUser);
    this.router
      .route(this.path + "/:id")
      .get(this.getUser)
      .put(this.updateUser)
      .delete(this.deleteUser);
    this.router
      .route(this.path + "/userandgroups/" + ":id")
      .get(this.getUserAndGroups);
    this.router
      .route(this.path + "/userfriends/" + ":id")
      .get(this.getUserFriends);
  }

  // Goes to route /api/users

  /**
   * Grabs all users in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllUsers = async (request: Request, response: Response): Promise<void> => {
    try {
      const user = await User.findAll(); // Grabs all users
      response.json(user);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new user in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createUser = async (request: Request, response: Response): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const user = await sequelize.transaction(async (t) => {
        //makes transaction that will auto rollback if error occurs
        const user = await User.create((request.body),{ transaction: t });
        return user;
      });
      
      response.status(200).json({ user });

    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/users/:id

  getUserAndGroups = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const user = await User.findOne({
        where: { id: id },
        include: [Group, Resource],
      }); // Grabs the user where the id is 0

      if (user) {
        response.status(200).json(user);
      } else {
        response.status(404).send("User with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Grabs a specific user based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getUser = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id

      const user = await User.findOne({
        where: { id: id },
      }); // Grabs the user where the id is 0

      if (user) {
        response.status(200).json(user);
      } else {
        response.status(404).send("User with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a user based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateUser = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request

       // Destructure the array so we grab the updated version of our user

      const updated = await sequelize.transaction(async (t) => {
        //makes transaction that will auto rollback if error occurs
        const [updated] = await User.update(request.body, {
          where: { id: id }, transaction: t
        });
        return updated;
      });
      

      if (updated) {
        const updatedUser = await User.findOne({ where: { id: id } }); // Grab the update user
        response.status(200).json({ user: updatedUser }); // Return the updated user
      } else {
        response.status(404).send("User with the specified ID does not exist"); // User does not exist
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a user based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteUser = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await sequelize.transaction(async (t) => {
        //makes transaction that will auto rollback if error occurs
        const deleted = await User.destroy({where: {id:id}, transaction: t});
        return deleted;
      });
      //verifies that the object has been deleted
      if (deleted) {
        response.status(204).send("User Deleted");
      } else {
        response.status(404).send("User with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  getUserFriends = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    const { id } = request.params;
    try {
      const userRequestedFriends = await Friend.findAll({
        where: { requesterid: id, status: "a" },
      });
      const userAcceptedFriends = await Friend.findAll({
        where: { addresseeid: id, status: "a" },
      });

      const userRequestedFriendsToFriendIds = userRequestedFriends.map(
        (friend) => friend.addresseeid
      );
      const userAcceptedFriendsToFriendIds = userAcceptedFriends.map(
        (friend) => friend.requesterid
      );

      const allUserFriendIds = [
        ...userRequestedFriendsToFriendIds,
        ...userAcceptedFriendsToFriendIds,
      ];

      const allUserFriends = allUserFriendIds.map(
        async (friend_id) => await User.findOne({ where: { id: friend_id } })
      );

      response.status(201).json(await Promise.all(allUserFriends));
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };
}

export default UsersController;
