import App  from "./App";
import UsersController from "./routes/api/controllers/UsersController";

// We pass the controllers from the api and the port
const app = new App(
    [
        new UsersController(),
    ],
    8080,
);

app.listen();