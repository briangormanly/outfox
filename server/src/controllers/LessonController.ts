import { Router, Request, Response } from "express";
import Lessons from "../models/Lessons";

class LessonController{
    public path = "/api/lessons";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes(): void{
        this.router
            .route(this.path)
            .get(this.getAllLessons)
            .post(this.createLesson);
        this.router
            .route(this.path + "/:id")
            .get(this.getLesson)
            .put(this.updateLesson)
            .delete(this.deleteLesson);
    }

    /**
     * Grabs a specific assignment based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
    */
     createLesson = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try{
            // If missing non-nullable fields it will create an error
            const lesson = await Lessons.create(request.body);
            response.status(201).json({ lesson });
        }catch(error){
            response.status(500).send(error.message);
        }
    };

    /**
     * Grabs a specific resources based off the ID provided
     * @param request HTTP browser request
     * @param response HTTP browser response
     */
    getLesson = async (request: Request, response: Response): Promise<void> => {
        try {
            const { id } = request.params; // Destructure the request.params object and grab only id
            const lesson = await Lessons.findOne({
                where: { id: id },
            });

            if (lesson) {
                response.status(200).json(lesson);
            } else {
                response
                .status(404)
                .send("Lesson with the specified ID does not exist");
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
    getAllLessons = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const lesson = await Lessons.findAll(); // Grabs all lessons
            response.json(lesson);
        } catch (err) {
            response.status(400).json({ message: "Something went wrong" });
        }
    };

    /*
    * Updates an assignment based off the ID provided
    * @param request HTTP browser request
    * @param response HTTP browser response
    */
    updateLesson = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const [updated] = await Lessons.update(request.body, {
                where: { id: id },
            });

            if (updated) {
                const updatedLesson = await Lessons.findOne({ where: { id: id } }); // Grab the update lesson
                response.status(200).json({ assignment: updatedLesson }); // Return the updated lesson
            } else {
                response
                .status(404)
                .send("Lesson with the specified ID does not exist"); // Error: lesson does not exist
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
    deleteLesson = async (
        request: Request,
        response: Response
      ): Promise<void> => {
        try {
            const { id } = request.params; // Destructure the object to only grab the id coming from the request
            const deleted = await Lessons.destroy({
                where: { id: id },
            }); // Delete the Lesson with the specified id
            if (deleted) {
                response.status(204).send("Lesson Deleted");
            } else {
                response
                .status(404)
                .send("Lesson with the specified ID does not exist");
            }
        } catch (error) {
          response.status(500).send(error.message);
        }
    };
}

export default LessonController;