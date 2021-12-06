import { UploadedFile } from "express-fileupload";
import { Router, Request, Response, request } from "express";
import File from "../models/File";
import * as fs from "fs";
import { v4 as uuidv4 } from 'uuid'; 

class FileController {
    public path = "/api/file";
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes(): void{
       this.router.route(this.path).post(this.saveFile);

       this.router.route(this.path + "/:uuid").get(this.getFile).put(this.updateFile).delete(this.deleteFile);
     
    }

    saveFile = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try{
            const uuid = uuidv4();
            const upfile = request.files.file as UploadedFile;
            const moveTo = `${__dirname}/../storage/`+uuid;
            const uri = `/storage/`+uuid;
/*             upfile.mv(moveTo, (error: Error) => {
              if (error) {
                return response.status(500).send(error);
              }
  
              return;
            }); */
            const file = await File.create({
                ...request.body,
                id: request.body.id,
                uuid: uuid,
                uri: uri,
                filename: request.body.filename,
                filetype: request.body.filetype,
                dateupload: request.body.dateupload,
                userid: request.body.userid,
                resourceid: request.body.resourceid,
                assignmentid: request.body.assignmentid
            });
            
            response.status(201).json({ file });
        }catch(error){
            response.status(500).send(error.message);
        }
    };

    getFile = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const { uuid } = request.params; // Destructure the request.params object and grab only udid
            const file = await File.findOne({
                where: { uuid: uuid },
            });

            if (file) {
                response.status(200).json(file);
            } else {
                response
                .status(404)
                .send("File does not exist");
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    };

    updateFile = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try {
            const { uuid } = request.params; // Destructure the request.params object and grab only udid
            const beforeUpdate = await File.findOne({where: { uuid: uuid }});

            fs.rename(`${__dirname}/../storage/`+beforeUpdate.uuid, 
                `${__dirname}/../storage/` + request.body.uuid,
                () => {console.log("\nFile Renamed!\n")});

            const updated = await File.update(request.body,{where: { uuid: uuid }});

            if (updated) {
                const updatedFile = await File.findOne({where:{id: uuid}});
                response.status(200).json({file: updatedFile});
            } else {
                response
                .status(404)
                .send("File does not exist");
            }
        } catch (error) {
            response.status(500).send(error.message);
        }
    };

    deleteFile = async (
        request: Request,
        response: Response
    ): Promise<void> => {
        try{
            const { uuid } = request.params; // Destructure the object to only grab the id coming from the request
            const beforeDelete = await File.findOne({where: { uuid: uuid }});

            fs.rmdir(`${__dirname}/../storage/` + beforeDelete.uuid,
            () => {
                console.log(beforeDelete.filename + " Deleted!");
            });

            const deleted = await File.destroy({where: { uuid: uuid }}); // Delete the file with the specified id
            if (deleted) {
                response.status(204).send("File Deleted");
            } else {
                response
                .status(404)
                .send("File with the specified ID does not exist");
            }
        }catch(error){
            response.status(500).send(error.message);
        }
    };

    downloadFile = async (
        request: Request,
        response: Response
      ): Promise<void> => {
        try {
          const { uuid } = request.params; // Destructure the request.params object and grab only id
          const file = await File.findOne({
            where: { uuid: uuid },
          });
    
          const filepath = `${__dirname}/../storage/` + file.uuid;
          if (file) {
            response.download(filepath);
          } else {
            response
              .status(404)
              .send("File does not exist");
          }
        } catch (error) {
          response.status(500).send(error.message);
        }
      };
}

export default FileController;