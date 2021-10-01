import { Router, Request, Response } from "express";
import Assignments from "../models/Assignments";
import Comment from "../models/Comment";

class AssignmentController{
    public path = "/api/assignments";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes(): void{
        return null;
    }
}