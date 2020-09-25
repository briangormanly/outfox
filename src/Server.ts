import App  from "./App";
import UsersController from "./routes/api/controllers/UsersController";

// Creates a new Express App that takes a list of Controllers and a port
const app = new App(
    [
        new UsersController(),
    ],
    8080,
);

// Utilize the listening method to see if the server if running
app.listen();