## Outfox 

To run the full project in development mode (super short version): 
1. Download or clone the repository.
2. Set up a connection to the Postgres Database (found in the Wiki under Database Installation).
3. Install the node_modules in the client,server, and root directory.
4. From the root run the command: "npm run dev" to run both the React frontend and Node backend concurrently.

More detail:
1. clone the repository
2. Create the database (Example is for postgres)

(In PostgreSQL)
```
CREATE ROLE outfox WITH CREATEDB CREATEROLE LOGIN INHERIT PASSWORD 'yoursecurepassword!';
CREATE DATABASE outfox;
GRANT ALL PRIVILEGES ON DATABASE outfox TO outfox;
```

3. Populate the database
(Example in PostgreSQL)
```
psql outfox -d outfox -a -f ./Database/CreateTables.sql
(optional)
psql outfox -d outfox -a -f ./Database/SampleData.sql
```

3. Configure the database
(In ./server/src/App.ts set initializeDatabaseConnection with correct DB settings (database, user, password))
See Sequelize documentation here: https://sequelize.org/master/manual/getting-started.html

4. Resolve dependancies
  a) in project home run: npm i
  b) in ./server run: npm i
  c) in ./client run: npm i
 