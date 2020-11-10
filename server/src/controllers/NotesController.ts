import { Router, Request, Response } from "express";
import Note from "../models/Note";
import Controller from "../interfaces/ControllerInterface";
//import Resource from "../models/Resource";

/**
 * The Note controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class NotesController implements Controller {
  // Path that is required in order to access the api http://localhost:8080/routes/api/notes
  public path = "/api/notes";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

   /**
   * Creates the routes for the Note Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    this.router.route(this.path).get(this.getAllNotes).post(this.createNote);
    this.router
      .route(this.path + "/:id")
      .get(this.getNote)
      .put(this.updateNote)
      .delete(this.deleteNote);
  }

  /**
   * Grabs all Notes in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllNotes = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const note = await Note.findAll(); // Grabs all Notes
      response.json(note);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new Note in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createNote = async (
    request: Request, 
    response: Response
    ): Promise<void> => {
    try {
      // If missing non-nullable fields it will create an error
      const note = await Note.create(request.body);
      response.status(201).json({ note });
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Grabs a specific Note based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getNote = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; 

      const note = await Note.findOne({
        where: { id: id },
      }); 

      if (note) {
        response.status(200).json(note);
      } else {
        response.status(404).send("Note with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a Note based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateNote = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; 

      const [updated] = await Note.update(request.body, {
        where: { id: id },
      }); 

      if (updated) {
        const updatedNote = await Note.findOne({ where: { id: id } }); 
        response.status(200).json({ note: updatedNote }); //Return the updated Note
      } else {
        response.status(404).send("Note with the specified ID does not exist"); //Note does not exist
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Deletes a Note based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  deleteNote = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; 
      const deleted = await Note.destroy({
        where: { id: id },
      }); // Delete the Note with the specified id
      if (deleted) {
        response.status(204).send("Note Successdully Deleted");
      } else {
        response.status(404).send("Note with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  
}

export default NotesController;