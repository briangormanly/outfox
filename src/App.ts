import express from 'express';
// Cors is only being used if we run React separately
import cors from 'cors';
// Using Morgan for middleware. At the moment for basic logging
import morgan from 'morgan';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(morgan('common'));
        this.app.use(cors());
    }

    private initializeControllers(controllers: any) {
        this.app.get('/', (req, res) => {
           res.send('<h1>Hello world! </h1>'); 
        });

        for(let i = 0; i < controllers.length; i++) {
            this.app.use(controllers[i].router);
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