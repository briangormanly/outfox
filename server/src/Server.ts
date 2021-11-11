import App from "./App";
import UsersController from "./controllers/UsersController";
import GroupsController from "./controllers/GroupsController";
import ResourceController from "./controllers/ResourceController";
import ShareController from "./controllers/ShareController";
import FriendController from "./controllers/FriendsController";
import CommentController from "./controllers/CommentController";
import FileController from "./controllers/FileController";
import AssignmentController from "./controllers/AssignmentController";
import LessonController from "./controllers/LessonController";
import TagsController from "./controllers/TagsController";
import ExploreController from "./controllers/ExploreController";
// Creates a new Express App that takes a list of Controllers and a port
const app = new App(
  [
    new UsersController(),
    new GroupsController(),
    new ResourceController(),
    new ShareController(),
    new FriendController(),
    new CommentController(),
    new TagsController(),
    new FileController(),
    new AssignmentController(),
    new LessonController(),
    new ExploreController()
  ],
  8080
);

// Utilize the listening method to see if the server if running
app.listen();
