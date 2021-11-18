import { Router, Request, Response } from "express";
import Group from "../models/Group";
import Controller from "../interfaces/ControllerInterface";
import Resource from "../models/Resource";
import FavoriteResource from "../models/FavoriteResource";
import FavoriteGroup from "../models/FavoriteGroup";
import GroupResource from "../models/GroupResource";
import sequelize from "../middleware/databaseConnection";
/**
 * The group controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class GroupsController implements Controller {
  // Path that is required in order to access the api /routeshttp://localhost:8080/api/groups
  public path = "http://localhost:8080/api/groups";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the Group Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    this.router.route(this.path).get(this.getAllGroups).post(this.createGroup);
    this.router
      .route(this.path + "/:id")
      .get(this.getGroup)
      .put(this.updateGroup)
      .delete(this.deleteGroup);
    this.router
      .route(this.path + "/groupsandresources/" + ":id")
      .get(this.getGroupsandResources);
    this.router.route(this.path + "/favgroups/:id").get(this.getFavGroups);
    this.router.route(this.path + "/favrecs/:id").get(this.getFavResources);
    this.router.route(this.path + "/addfavgrp/:id/:grpid").get(this.setFavGroup);
    this.router.route(this.path + "/remfavgrp/:id/:grpid").get(this.remFavGroup);
    this.router.route(this.path+"/addfavrec/:id/:recid").get(this.setFavResource);
    this.router.route(this.path+"/remfavrec/:id/:recid").get(this.remFavResource);
    // Need to add patch
  }

  // Goes to route http://localhost:8080/api/groups

  /**
   * Grabs all groups in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllGroups = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const group = await Group.findAll(); // Grabs all groups
      response.json(group);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new group in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createGroup = async (request: Request, response: Response): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const group = await Group.create(request.body);
      response.status(201).json({ group });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  addResource = async (request: Request, response: Response): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const group = await GroupResource.create(request.body);
      response.status(201).json({ group });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route http://localhost:8080/api/groups/:id

  /**
   * Grabs a specific group based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getGroup = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const group = await Group.findOne({
        where: { id: id },
        include: Resource,
      }); // Grabs the group where the id is 0

      if (group) {
        response.status(200).json(group);
      } else {
        response.status(404).send("Group with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a group based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateGroup = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const [updated] = await Group.update(request.body, {
        where: { id: id },
      }); // Destructure the array so we grab the updated version of our group

      if (updated) {
        const updatedGroup = await Group.findOne({ where: { id: id } }); // Grab the update group
        response.status(200).json({ group: updatedGroup }); // Return the updated group
      } else {
        response.status(404).send("Group with the specified ID does not exist"); // group does not exist
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route http://localhost:8080/api/groups/:id

  getGroupsandResources = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const group = await Group.findOne({
        where: { id: id },
        include: Resource,
      }); // Grabs the group where the id is 0

      if (group) {
        response.status(200).json(group);
      } else {
        response.status(404).send("Group with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a group based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteGroup = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await Group.destroy({
        where: { id: id },
      }); // Delete the group with the specified id
      if (deleted) {
        response.status(204).send("Group Deleted");
      } else {
        response.status(404).send("Group with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

    /**
   * gets favorite groups fpr homepage
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getFavGroups = async (request: Request, response: Response): Promise<void> =>{
      try{
        const{id} = request.params;
        const qry = `SELECT groups.* FROM favoritegroup, groups WHERE favoritegroup.userid = ${parseInt(id)} AND favoritegroup.groupid = groups.id;`;
        const favGroups = await sequelize.query(qry, {
          model: Group,
          mapToModel: true // pass true here if you have any mapped fields
        });
        response.status(200).json(favGroups);
      } catch(error){
        response.status(500).send(error.message);
      }
  };
    /**
   * gets favorite resources fpr homepage
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getFavResources = async (request: Request, response: Response): Promise<void> =>{
    try{
      const{id} = request.params;
      const qry = `SELECT resources.* FROM favoriteresource, resources WHERE favoriteresource.userid = ${parseInt(id)} AND favoriteresource.resourceid = resources.id;`;
      const favResources = await sequelize.query(qry, {
        model: Group,
        mapToModel: true // pass true here if you have any mapped fields
      });
     
        response.status(200).json(favResources);
      
     
    } catch(error){
      response.status(500).send(error.message);
    }
};
setFavGroup = async(request: Request, response: Response): Promise<void> =>{
  try{
    const{id, grpid} =  request.params;

    
   
    const qry = `INSERT INTO favoritegroup (groupid, userid) VALUES (${grpid},${id})`;
    const resp = await sequelize.query(qry);
  
    response.status(200).json({"send":"success"});
  }catch(error){
    response.status(500).send(error.message);
    
    }
};

remFavGroup = async(request: Request, response: Response): Promise<void> =>{
  try{
    const{id, grpid} =  request.params;

    
   
    const qry = `DELETE FROM favoritegroup WHERE groupid = ${grpid} AND userid = ${id}`;
    
    const resp = await sequelize.query(qry);
  
    response.status(200).json({"send":"success"});
  }catch(error){
    response.status(500).send(error.message);
    
    }
};



setFavResource = async(request: Request, response: Response): Promise<void> =>{
  try{
    const{id, recid} =  request.params;

    
    const qry = `INSERT INTO favoriteresource (resourceid, userid) VALUES (${recid},${id})`;
    const resp = await sequelize.query(qry);
    response.status(200).json({"status": "created"});
  }catch(error){
    response.status(500).send(error.message);
  }
};

remFavResource = async(request: Request, response: Response): Promise<void> =>{
  try{
    const{id, recid} =  request.params;

    
   
    const qry = `DELETE FROM favoriteresource WHERE resourceid = ${recid} AND userid = ${id}`;
    
    const resp = await sequelize.query(qry);
  
    response.status(200).json({"send":"success"});
  }catch(error){
    response.status(500).send(error.message);
    
    }
}; 

}

export default GroupsController;
