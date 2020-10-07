import express, { Application, Request, Response, NextFunction } from 'express';

// Cors is only being used if we run React separately
import cors from 'cors';
// Using Morgan for middleware. At the moment for basic logging
import morgan from 'morgan';
import { Sequelize } from 'sequelize';

import { sync } from './api/syncDatabase';
import { Associations } from './api/models/associations';

import passport from './middleware/passport';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';




/**
 * Used as the primarily class for the express server
 */
class App {
    public app: Application;
    public sequelize: Sequelize;
    public port: number;

    constructor(controllers: any, port: number) {
        this.app = express();
        this.port = port;
        Associations();
        sync();
        this.initializeDatabaseConnection();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private async initializeDatabaseConnection() {
        // outfoxdb is the database name, user (me) is the root user in my case. *It will be different for you*, third spot is for password (I don't have one), host is where its being hosted for me localhost or 127.0.0.1, dialect is postgres since that is the database type we are using.
        this.sequelize = new Sequelize('outfoxdb', 'sqlize', '', {
            host: 'localhost',
            dialect: 'postgres'
        });

        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully');
        } catch (err) {
            console.error('Unable to connect to the databse:', err);
        }
    }

    // Application Level Middleware Initialization
    private initializeMiddlewares() {
        this.app.use(morgan('common'));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(passport.initialize());
        this.app.use(session({
            secret: 'secretcode',
            resave: true,
            saveUninitialized: true

        }));
        this.app.use(cookieParser("secretcode"));
    }

    private initializeControllers(controllers: any) {
        // Only here temp so we can get a home page instead of a 404

        this.app.get('/', (req, res) => {
            res.send('Do not use .render() this isn\'t ejs');
        });
        this.app.post("/login", (req: Request, res: Response, next: NextFunction) => {
            passport.authenticate("local", (err, user, info) => {
              if (err) throw err;
              if (!user) {
                res.send("No user exists");
              } else {
                req.logIn(user, (err) => {
                  if (err) throw err;
                    res.json({user});
                });
              }
            })(req, res, next);
          });
        for (const iterator of controllers) {
            this.app.use(iterator.router);
        }
    }

    public listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`Server running at http://localhost:${this.port}`);
        });
    }
}
export default App;