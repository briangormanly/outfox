import { Router, Request, Response, response } from "express";
import Controller from "../interfaces/ControllerInterface";


class ExploreController{
    public path = "/api/explore"
    public router = Router();

    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes(): void { // setting up routes
        this.router.route(this.path + "/groups/:userid").get(this.getRecGroups);
        this.router.route(this.path + "/users/:userid").get(this.getRecUsers);
        this.router.route(this.path + "/resources/:userid").get(this.getRecResorces);

    }


    private  async getResponse(type: string,userid: number): Promise<any>{ // used to communicate with outfox-ai
        let endPoint;
        switch(type){   // easier than writing the whole thing out every time
            case "user":
                endPoint = "getRecUsers";
                break;
            case "group":
                endPoint = "getRecGroups";
                break;
            case "resource":
                endPoint = "getRecResources";
                break;
        }
        


        fetch(`http://96.249.211.3:105/${endPoint}/?userid=${userid}`,  // talking to outfox-ai
        {
            method: 'get',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        }).then(response => response.json()).then(res => response.json());
        return res;
        
    }
        
  /**
   * Grabs all friends in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

private getRecGroups = async (
      request: Request,
      response: Response
  ): Promise<void> => {
      try{
          const {userid} = request.params;
          const id: number = parseInt(userid);
          const res = await this.getResponse("group", id);
          if(res){
              response.status(200).json(res);
          }
         
          // get the stuff from reccomendation
      }catch(err){
        response.status(400).json({ message: "Something went wrong" });
      }
  }

  
  /**
   * Grabs all friends in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

   private getRecUsers = async (
    request: Request,
    response: Response
): Promise<void> => {
    try{
        const {userid} = request.params;
        const id: number = parseInt(userid);
          const res = await this.getResponse("user", id);
          if(res){
              response.status(200).json(res);
          }
        // get the stuff from reccomendation
    }catch(err){
      response.status(400).json({ message: "Something went wrong" });
    }
}



  /**
   * Grabs all friends in the database and sends them as a response in json
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

  private  getRecResorces = async (
    request: Request,
    response: Response
): Promise<void> => {
    try{
        const {userid} = request.params;
        const id: number = parseInt(userid);
          const res = await this.getResponse("resource", id);
          if(res){
              response.status(200).json(res);
          }
        // get the stuff from reccomendation
    }catch(err){
      response.status(400).json({ message: "Something went wrong" });
    }
}
   
}

export default ExploreController;