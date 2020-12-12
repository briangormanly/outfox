import express, { Application } from "express"; // Basic Routing Library used for the API
import cors from "cors"; // Allows React and Express to Interact
import morgan from "morgan"; // Basic Logging of Requests
import { Sequelize } from "sequelize"; // ORM for the PostgreSQL Database
import dbConnection from "./middleware/databaseConnection";

import sync from "./middleware/syncDatabase"; // Currently used to synchronize our models (Should switch to migrations - Read more at https://sequelize.org/master/manual/migrations.html)
import passport from "./middleware/passportConfig"; // Used for our Local Authentication Strategy
import cookieParser from "cookie-parser"; // Allows us to use cookies for our sessions
import bodyParser from "body-parser"; // Determines how our requests will come  in
import session from "express-session"; // Allows for indiviudal sessions (When a user logs in it creates a session)
import Controller from "./interfaces/ControllerInterface"; // The Interface declaring what a controller is (TypeScripts "Types" required otherwise ESLint gets mad at any)
import validLogin from "./middleware/validLogin"; // Middleware Method used for authentication (Can be used for protected routes)
import fileUpload from "express-fileupload"; // The library allowing us to upload files into the server (Should probably look into a online storage solution)

/**
 * Used as the primary class for the express server
 */
class App {
  public app: Application; // Express requires you make an instance of the application
  public sequelize: Sequelize; // The database might change the name to db
  public port: number;

  // The constructor that will set up the initial server when a instance is created.
  constructor(controllers: Controller[], port: number) {
    this.app = express(); // Express Application Instance
    this.port = port;
    sync(); // Synchronizes the models (Probably should switch to migrations)
    this.initializeMiddlewares(); // Connects the middleware methods to the application level (Highest Level)
    this.initializeControllers(controllers); // Connects the applications router to the individual controllers routing
  }


  // Application Level Middleware Initialization
  private initializeMiddlewares(): void {
    this.app.use(morgan("common"));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(passport.initialize());
    this.app.use(
      session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
      })
    );
    this.app.use(cookieParser("secretcode"));
    this.app.use(fileUpload());
  }

  private initializeControllers(controllers: Controller[]): void {
    const root1 = __dirname + "/../src";
    // Only here temp so we can get a home page instead of a 404
    this.app.get("/", (req, res) => {
      //res.send("Do not use .render() this isn't ejs");
      res.sendFile("test.html", { root: root1 });
    });

    this.app.post("/login", validLogin);

    for (const iterator of controllers) {
      this.app.use(iterator.router);
    }
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${this.port}`);
    });
  }
}

export default App;
