import express, { Application } from 'express';
// Cors is only being used if we run React separately
import cors from 'cors';
// Using Morgan for middleware. At the moment for basic logging
import morgan from 'morgan';
import { Sequelize } from 'sequelize';

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

        this.initializeDatabaseConnection();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private async initializeDatabaseConnection() {
        // outfoxdb is the database name, johngustafson (me) is the root user in my case. *It will be different for you*, third spot is for password (I don't have one), host is where its being hosted for me localhost or 127.0.0.1, dialect is postgres since that is the database type we are using.
        this.sequelize = new Sequelize('outfoxdb', 'johngustafson', '', {
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

    private initializeMiddlewares() {
        this.app.use(morgan('common'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    private initializeControllers(controllers: any) {
        // Only here temp so we can get a home page instead of a 404
        this.app.get('/', (req, res) => {
           res.send('<h1>Hello world! </h1>'); 
        });

        for (const iterator of controllers) {
            this.app.use(iterator.router);
        }
    }

    public listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`Server running at http://localhost:${ this.port }`);
        });
    }
}
export default App;