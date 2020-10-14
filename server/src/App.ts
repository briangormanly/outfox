import express, { Application } from "express";
// Cors is only being used if we run React separately
import cors from "cors";
// Using Morgan for middleware. At the moment for basic logging
import morgan from "morgan";
import { Sequelize } from "sequelize";
import sync from "./middleware/syncDatabase";
import passport from "./middleware/passportConfig";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import Controller from "./interfaces/ControllerInterface";
import validLogin from "./middleware/validLogin";

/**
 * Used as the primarily class for the express server
 */
class App {
  public app: Application;
  public sequelize: Sequelize;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;
    this.initializeDatabaseConnection();
    sync();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private async initializeDatabaseConnection(): Promise<void> {
    this.sequelize = new Sequelize("outfoxdb", "sqlize", "", {
      host: "localhost",
      dialect: "postgres",
    });

    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully");
    } catch (err) {
      console.error("Unable to connect to the databse:", err);
    }
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
  }

  private initializeControllers(controllers: Controller[]): void {
    // Only here temp so we can get a home page instead of a 404
    this.app.get("/", (req, res) => {
      res.send("Do not use .render() this isn't ejs");
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
