import App  from './App';
import UsersController from './api/controllers/UsersController';
import GroupsController from './api/controllers/GroupsController';
// Creates a new Express App that takes a list of Controllers and a port
const app = new App(
    [
        new UsersController(),
        new GroupsController(),
    ],
    8080,
);

// Utilize the listening method to see if the server if running
app.listen();
