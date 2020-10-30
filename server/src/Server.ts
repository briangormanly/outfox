import App from "./App";
import UsersController from "./controllers/UsersController";
import GroupsController from "./controllers/GroupsController";
import ResourceController from "./controllers/ResourceController";
import FriendController from "./controllers/FriendsController";
import NotesController from "./controllers/NotesController";
// Creates a new Express App that takes a list of Controllers and a port
const app = new App(
  [new UsersController(), new GroupsController(), new ResourceController(), new FriendController(), new NotesController()],
  8080
);

// Utilize the listening method to see if the server if running
app.listen();
