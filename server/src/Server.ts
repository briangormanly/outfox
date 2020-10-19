import App from "./App";
import UsersController from "./controllers/UsersController";
import GroupsController from "./controllers/GroupsController";
import ResourceTypeController from "./controllers/ResourceTypeController";
import ResourceController from "./controllers/ResourceController";
import LinkOwnerTypeController from "./controllers/LinkOwnerTypeController";
import TagsController from "./controllers/TagsController";
// Creates a new Express App that takes a list of Controllers and a port
const app = new App(
  [
    new UsersController(),
    new GroupsController(),
    new ResourceTypeController(),
    new ResourceController(),
    new LinkOwnerTypeController(),
    new TagsController(),
  ],
  8080
);

// Utilize the listening method to see if the server if running
app.listen();
