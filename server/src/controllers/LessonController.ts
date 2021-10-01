import { Router, Request, Response } from "express";
import Lessons from "../models/Lessons";
import Comment from "../models/Comment";

class LessonController{
    public path = "/api/lessons";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes(): void{
        return null;
    }
}