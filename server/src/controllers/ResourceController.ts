import { Router, Request, Response } from "express";
import Resource from "../models/Resource";
import Comment from "../models/Comment";

/**
 * The resource controller is responsible for handling the HTTP requests.
 * Examples would be GET, POST, PUT, DELETE.
 */
class ResourceController {
  // Path that is required in order to access the api http://localhost:8080/api/resources
  public path = "/api/resources";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  /**
   * Creates the routes for the resource Controller
   * Ex. GET, PUT, POST, UPDATE, etc
   */
  public initializeRoutes(): void {
    this.router
      .route(this.path)
      .get(this.getAllResources)
      .post(this.createResource);
    this.router
      .route(this.path + "/:id")
      .get(this.getResource)
      .put(this.updateResource)
      .delete(this.deleteResource);
    this.router
      .route(this.path + "/resourcecomments/" + ":id")
      .get(this.getResourceComments);
    this.router
      .route(this.path + "/resourcethreads/" + ":id")
      .get(this.getallThreads);
    // Need to add patch
    this.router.route(this.path + "/download/:id").get(this.downloadResource);
  }

  // Goes to route /api/resources

  /**
   * Grabs all resources in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  getAllResources = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const resource = await Resource.findAll(); // Grabs all resources
      response.json(resource);
    } catch (err) {
      response.status(400).json({ message: "Something went wrong" });
    }
  };

  /**
   * Creates a new resources in the database if the request has the correct json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  createResource = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      if (request.body.type === "Link") {
        const resource = await Resource.create(request.body);
        response.status(201).json({ resource });
      } else {
        if (request.files) {
          response.status(500).json({ error: "No file uploaded" });
        }

        const file = request.files.file;
        let moveTo: string;
        let uri: string;
        if (file.mimetype.includes("image")) {
          moveTo = `${__dirname}/../storage/images/${file.name}`;
          uri = `/storage/images/${file.name}`;
          file.mv(moveTo, (error: Error) => {
            if (error) {
              return error.message;
            }

            return {
              fileName: file.name,
              filePath: uri,
            };
          });
        } else if (file.mimetype.includes("text")) {
          moveTo = `${__dirname}/../storage/text/${file.name}`;
          uri = `/storage/text/${file.name}`;
          file.mv(moveTo, (error: Error) => {
            if (error) {
              return error.message;
            }

            return {
              fileName: file.name,
              filePath: uri,
            };
          });
        } else if (file.mimetype.includes("pdf")) {
          moveTo = `${__dirname}/../storage/pdfs/${file.name}`;
          uri = `/storage/pdfs/${file.name}`;
          file.mv(moveTo, (error: Error) => {
            if (error) {
              return error.message;
            }

            return {
              fileName: file.name,
              filePath: uri,
            };
          });
        }

        const resource = await Resource.create({
          type: request.body.type,
          title: request.body.title,
          description: request.body.description,
          uri: uri,
          mutable: request.body.mutable,
          creatorid: request.body.creatorid,
        });
        response.status(201).json({ resource });
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  // Goes to route /api/resources/:id

  /**
   * Grabs a specific resource based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  downloadResource = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const resource = await Resource.findOne({
        where: { id: id },
      }); // Grabs the resources where the id is 0
      const file = `${__dirname}/..` + resource.uri;
      if (resource) {
        response.download(file);
      } else {
        response
          .status(404)
          .send("Resource with the specified ID does not exist");
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
  getResource = async (request: Request, response: Response): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const resource = await Resource.findOne({
        where: { id: id },
      }); // Grabs the resources where the id is 0

      if (resource) {
        response.status(200).json(resource);
      } else {
        response
          .status(404)
          .send("Resource with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  /**
   * Updates a resources based off the ID provided
   * @param request HTTP browser request
   * @param response HTTP browser response
   */
  updateResource = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const [updated] = await Resource.update(request.body, {
        where: { id: id },
      }); // Destructure the array so we grab the updated version of our resources

      if (updated) {
        const updatedResource = await Resource.findOne({ where: { id: id } }); // Grab the update resource
        response.status(200).json({ resource: updatedResource }); // Return the updated resources
      } else {
        response
          .status(404)
          .send("Resource with the specified ID does not exist"); // resource does not exist
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
  deleteResource = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the object to only grab the id coming from the request
      const deleted = await Resource.destroy({
        where: { id: id },
      }); // Delete the resource with the specified id
      if (deleted) {
        response.status(204).send("Resource Deleted");
      } else {
        response
          .status(404)
          .send("Resource with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  //method to get all comments associated to a specific resource id
  getResourceComments = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; // Destructure the request.params object and grab only id
      const resourcecomments = await Comment.findAll({
        where: { commentedOnResource: id },
      }); // Return the comments with the specified resource id

      if (resourcecomments) {
        response.status(201).json(resourcecomments);
      } else {
        response
          .status(404)
          .send("Resource with the specified ID does not exist");
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  //method to return ordered threads
  getallThreads = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    try {
      const { id } = request.params; //Grabs resource id only
      const threads = await Comment.findAll({
        where: { id: id },
        include: { association: "thread" },
      });
      // //Algorithm to flatten an array recursively
      // const flatDeep: (arr: any, d: number) => any[] = (arr, d = 1) => {
      //   return d > 0
      //     ? arr.reduce(
      //         (arr: any, val: any) =>
      //           arr.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
      //         []
      //       )
      //     : arr.slice();
      // };

      // //Returns a list of all root comments with their children
      // const getCommentTree = async () => {
      //   let rootComments = await Comment.findAll({
      //     where: {
      //       commentedOnResource: id,
      //     },
      //   });
      //   rootComments = await getChildComments(rootComments);
      //   return rootComments;
      // };

      // //helper method to recursively search for all children of root comments
      // const getChildComments = async (rootComments: any) => {
      //   const expendPromise: any = [];
      //   rootComments.forEach((item: any) => {
      //     expendPromise.push(
      //       Comment.findAll({
      //         where: {
      //           threadID: item.id,
      //         },
      //       })
      //     );
      //   });
      //   const child = await Promise.all(expendPromise);
      //   //eslint-disable-next-line
      //   for (let [idx, item] of child.entries()) {
      //     //eslint-disable-next-line
      //     // @ts-ignore
      //     if (item.length > 0) {
      //       item = await getChildComments(item);
      //     }
      //     //eslint-disable-next-line
      //     if (item)
      //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //       // @ts-ignore
      //       rootComments.push(item.flat());
      //   }

      //   return rootComments;
      // };

      // //returns the array of root comments and their children
      // const commentTree = await getCommentTree();

      // //Separates the parent comments from the comment tree
      // const parents = commentTree.filter(
      //   (comment) => comment.threadID === null
      // );

      // //Separates the children arrays in their threads
      // const children = commentTree.filter((comment) => Array.isArray(comment));

      // //Combines the roots and children into the same array, with the root starting the subarray followed by children
      // const parentsAndChildren = parents.map((parent: any, index: number) => {
      //   //eslint-disable-next-line
      //   // @ts-ignore
      //   return [parent, ...children[index]];
      // });

      response.status(201).json(threads);
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
}

export default ResourceController;
