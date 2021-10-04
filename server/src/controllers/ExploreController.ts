import { Router, Request, Response, response } from "express";
import Controller from "../interfaces/ControllerInterface";
import fetch from "node-fetch";
class ResponseObj{
    public recordList = {};
    constructor(obj:any){
        this.recordList = obj;
    }
}
class ExploreController implements Controller{
   
    public path = "/api/explore";
    public router = Router();

    constructor(){
        this.initializeRoutes();
        
    }

    public initializeRoutes(): void { // setting up routes
        this.router.route(this.path + "/groups/:userid").get(this.getRecGroups);
        this.router.route(this.path + "/users/:userid").get(this.getRecUsers);
        this.router.route(this.path + "/resources/:userid").get(this.getRecResorces);

    }
   

     public async getResponse(type: string,userid: number): Promise<ResponseObj>{ // used to communicate with outfox-ai
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

        
        const response = await fetch(`http://96.249.211.3:105/${endPoint}?userid=${userid}`);
        const data = await response.json();
        return new ResponseObj(data);
 
        
    }
    
  
   
  /**
   
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

private getRecGroups = async (
      request: Request,
      response: Response
  ): Promise<Response> => {
      try{
          const {userid} = request.params;
          const id: number = parseInt(userid);
          try{
            const res =  await this.getResponse("group", id);
            // const res = {"this": "dataa"};
               if(res){
                  return response.status(200).json(res.recordList);
               }
            //  response.status(200).json(res.recordList);
          }catch(err){
            return  response.status(405).json({"error": "error making connection to outfox-ai", "erText": err.stack});
          }
          
          // get the stuff from reccomendation
      }catch(err){
      return response.status(400).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
      }
  };

  
  /**
   *
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

   private getRecUsers = async (
    request: Request,
    response: Response
): Promise<Response> => {
    try{
        const {userid} = request.params;
        const id: number = parseInt(userid);
        try{
          const res =  await this.getResponse("user", id);
          // const res = {"this": "dataa"};
             if(res){
                return response.status(200).json(res.recordList);
             }
          //  response.status(200).json(res.recordList);
        }catch(err){
          return  response.status(405).json({"error": "error making connection to outfox-ai", "erText": err.stack});
        }
        
        // get the stuff from reccomendation
    }catch(err){
    return response.status(400).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
    }
};



  /**
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

  private  getRecResorces = async (
    request: Request,
    response: Response
): Promise<Response> => {
    try{
        const {userid} = request.params;
        const id: number = parseInt(userid);
        try{
          const res =  await this.getResponse("resource", id);
          // const res = {"this": "dataa"};
             if(res){
                return response.status(200).json(res.recordList);
             }
          //  response.status(200).json(res.recordList);
        }catch(err){
          return  response.status(405).json({"error": "error making connection to outfox-ai", "erText": err.stack});
        }
        
        // get the stuff from reccomendation
    }catch(err){
    return response.status(400).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
    }
};
   
}

export default ExploreController;