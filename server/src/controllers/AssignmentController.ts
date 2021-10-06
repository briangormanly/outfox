import { UploadedFile } from "express-fileupload";
import { Router, Request, Response } from "express";
import Assignments from "../models/Assignments";
import Comment from "../models/Comment";

class AssignmentController {
    public path = "/api/assignments";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes(): void{
        this.router
            .route(this.path)
            .get(this.getAllAssignments)
            .post(this.createAssignment);
        this.router
            .route(this.path + "/:id")
            .get(this.getAssignment)
            .put(this.updateAssignment)
            .delete(this.deleteAssignment);
        this.router
            .route(this.path + "/assignmentcomments/" + ":id")
            .get(this.getAssignmentComments);
        // do we even need threads here?
        this.router
            .route(this.path + "/download/:id")
            .get(this.downloadAssignment);
    }
    
    /**
     * Grabs a specific assignment based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
    */
    createAssignment = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try{
            return null // need to implement submitting a file for an assignment
        }catch(error){
            response.status(500).send(error.message);
        }
    };

    /**
     * Grabs a specific assignment based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
    */
    uploadAssignment = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try{
            return null // need to implement submitting a file for an assignment
        }catch(error){
            response.status(500).send(error.message);
        }
    };

    /**
     * Grabs a specific assignment based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
    */
    downloadAssignment = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id
            const assignment = await Assignments.findOne({
                where: { id: id },
            });

            if (assignment.attachment_type === "Link") {
                response
                .status(500)
                .send("No file associated with this Assignment. (Link Type)");
            }
            const file = `${__dirname}/..` + assignment.uri;
            if (assignment) {
                response.download(file);
            } else {
                response
                .status(404)
                .send("Assignment with the specified ID does not exist");
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    };

    /**
     * Grabs a specific resources based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAssignment = async (request: Request, response: Response): Promise<void> => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id
            const assignment = await Assignments.findOne({
                where: { id: id },
            });

            if (assignment) {
                response.status(200).json(assignment);
            } else {
                response
                .status(404)
                .send("Assignment with the specified ID does not exist");
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    };

    /**
     * Grabs all assignments in the database and sends them as a response in json
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getAllAssignments = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const assignment = await Assignments.findAll(); // Grabs all assignments
            response.json(assignment);
        } catch (err) {
            response.status(400).json({ message: "Something went wrong" });
        }
    };

    /*
    * Updates an assignment based off the ID provided
    * @param request HTTP browser request
    * @param response HTTP browser response
    */
    updateAssignment = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const [updated] = await Assignments.update(request.body, {
                where: { id: id },
            });

            if (updated) {
                const updatedAssignment = await Assignments.findOne({ where: { id: id } }); // Grab the update assignment
                response.status(200).json({ resource: updatedAssignment }); // Return the updated assignment
            } else {
                response
                .status(404)
                .send("Assignment with the specified ID does not exist"); // Error: assignment does not exist
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    };

    /**
    * Deletes a resource based off the ID provided
    * @param request HTTP browser request
    * @param response HTTP browser response
    */
    deleteAssignment= async (
        request: Request,
        response: Response
      ): Promise<void> => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const deleted = await Assignments.destroy({
                where: { id: id },
            }); // Delete the Assignment with the specified id
            if (deleted) {
                response.status(204).send("Assignment Deleted");
            } else {
                response
                .status(404)
                .send("Assignment with the specified ID does not exist");
            }
        } catch (error) {
          response.status(500).send(error.message);
        }
    };

    //method to get all comments associated to a specific assignment id
    getAssignmentComments = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id
            const assignmentcomments = await Comment.findAll({
                where: { commentedAssignment: id },
            }); // Return the comments with the specified assignment id

            if (assignmentcomments) {
                response.status(201).json(assignmentcomments);
            } else {
                response
                .status(404)
                .send("Assignment with the specified ID does not exist");
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    };
}

export default AssignmentController;