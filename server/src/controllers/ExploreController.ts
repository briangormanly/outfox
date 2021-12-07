import { Router, Request, Response, response } from "express";
import Controller from "../interfaces/ControllerInterface";
import axios from 'axios';
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
        this.router.route(this.path + "/groupspgn/:userid").get(this.getGroupsPageAmt); // **pgn endpoints used to allow the explore page to see how many pages there are
        this.router.route(this.path + "/userspgn/:userid").get(this.getUsersPageAmt);
        this.router.route(this.path + "/resourcespgn/:userid").get(this.getResourcesPageAmt);
        this.router.route(this.path + "/groups/:userid/:page").get(this.getRecGroups);
        this.router.route(this.path + "/users/:userid/:page").get(this.getRecUsers);
        this.router.route(this.path + "/resources/:userid/:page").get(this.getRecResorces);
        

    }
    
    

 
  /**
   * @param type type of request to make specifying endpoint
   * @param userid user id
   */

    private async getPageNResponse(type: string, userid: number): Promise<ResponseObj>{
        let endPoint;
        switch(type){   // easier than writing the whole thing out every time
            case "user":
                endPoint = "getUserPgs";
                break;
            case "group":
                endPoint = "getGroupPgs";
                break;
            case "resource":    
                endPoint = "getResourcePgs";
                break;
        }
        const response = await axios.get(`http://localhost:105/${endPoint}?userid=${userid}`);
        const data = response.data;
        return new ResponseObj(data);
    }
    
  /**
   * @param type type of request to make specifying endpoint
   * @param userid user id
   * @param page page number
   */
     private async getRecordResponse(type: string,userid: number, page: number): Promise<ResponseObj>{ // used to communicate with outfox-ai
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

        
        const response = await axios.get(`http://localhost:105/${endPoint}?userid=${userid}&page=${page}`);
        const data = response.data;
        return new ResponseObj(data);
 
        
    }

  /**
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

    private getGroupsPageAmt = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        try{
            const {userid} = request.params;
            const id: number = parseInt(userid);
            try{
              const res =  await this.getPageNResponse("group", id);
              // const res = {"this": "dataa"};
                 if(res){
                    return response.status(200).json(res.recordList);
                 }
              //  response.status(200).json(res.recordList);
            }catch(err){
              return  response.status(500).json({"error": "error making connection to outfox-ai", "erText": err.stack});
            }
            
            // get the stuff from reccomendation
        }catch(err){
        return response.status(500).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
        }
    };
   
  /**
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

       private getUsersPageAmt = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        try{
            const {userid} = request.params;
            const id: number = parseInt(userid);
            try{
              const res =  await this.getPageNResponse("user", id);
              // const res = {"this": "dataa"};
                 if(res){
                    return response.status(200).json(res.recordList);
                 }
              //  response.status(200).json(res.recordList);
            }catch(err){
              return  response.status(500).json({"error": "error making connection to outfox-ai", "erText": err.stack});
            }
            
            // get the stuff from reccomendation
        }catch(err){
        return response.status(500).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
        }
    };

  /**
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

       private getResourcesPageAmt = async (
        request: Request,
        response: Response
    ): Promise<Response> => {
        try{
            const {userid} = request.params;
            const id: number = parseInt(userid);
            try{
              const res =  await this.getPageNResponse("resource", id);
              // const res = {"this": "dataa"};
                 if(res){
                    return response.status(200).json(res.recordList);
                 }
              //  response.status(200).json(res.recordList);
            }catch(err){
              return  response.status(500).json({"error": "error making connection to outfox-ai", "erText": err.stack});
            }
            
            // get the stuff from reccomendation
        }catch(err){
        return response.status(500).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
        }
    };

  /**
   * @param request HTTP browser request
   * @param response HTTP browser response
   */

private getRecGroups = async (
      request: Request,
      response: Response
  ): Promise<Response> => {
      try{
          const {userid, page} = request.params;
          const id: number = parseInt(userid);
          const pg: number = parseInt(page);
          try{
            const res =  await this.getRecordResponse("group", id, pg);
            // const res = {"this": "dataa"};
               if(res){
                  return response.status(200).json(res.recordList);
               }
            //  response.status(200).json(res.recordList);
          }catch(err){
            return  response.status(500).json({"error": "error making connection to outfox-ai", "erText": err.stack});
          }
          
          // get the stuff from reccomendation
      }catch(err){
      return response.status(500).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
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
        const {userid, page} = request.params;
        const id: number = parseInt(userid);
        const pg: number = parseInt(page);
        try{
          const res =  await this.getRecordResponse("user", id, pg);
          // const res = {"this": "dataa"};
             if(res){
                return response.status(200).json(res.recordList);
             }
          //  response.status(200).json(res.recordList);
        }catch(err){
          return  response.status(500).json({"error": "error making connection to outfox-ai", "erText": err.stack});
        }
        
        // get the stuff from reccomendation
    }catch(err){
    return response.status(500).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
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
        const {userid, page} = request.params;
        const id: number = parseInt(userid);
        const pg: number = parseInt(page);
        try{
          const res =  await this.getRecordResponse("resource", id, pg);
          // const res = {"this": "dataa"};
             if(res){
                return response.status(200).json(res.recordList);
             }
          //  response.status(200).json(res.recordList);
        }catch(err){
          return  response.status(500).json({"error": "error making connection to outfox-ai", "erText": err.stack});
        }
        
        // get the stuff from reccomendation
    }catch(err){
    return response.status(500).json({ message: "Something went wrong", "inputtedID": request.params['userid'], "error": err.stack });
    }
};
   
}

export default ExploreController;