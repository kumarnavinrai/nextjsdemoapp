"# nextjsdemoapp" 

# Next.js (React) + Redux + Express REST API + Postgres SQL boilerplate



* Simple REST API routes with [`sql-wizard`].
* Redux REST support with `redux-api` and `next-redux-wrapper`.
* Flexible client-side routing with `next-routes` (see `server/routes.js`).
* Flexible configuration with `config/config.js` and `.env` file.
* Hot reloading with `nodemon`.
* Testing with Jasmine.
* Code formatting and linting with StandardJS.
* JWT authentication for client-server communication (coming).

## How to use

Clone this repository:

	git clone 

Install dependencies:

	cd [MY_APP]
	yarn  # or npm install

Install Postgres and set up the database:

	psql postgres  # Start the Postgres command-line client
	
	CREATE DATABASE "nextjs-sql-rest-api-boilerplate";  -- You can also use \connect to connect to existing database
	CREATE TABLE kitten (id serial, name text);  -- Create a blank table
	INSERT INTO kitten (name) VALUES ('Pugget');  -- Add example data
	SELECT * FROM kitten;  -- Check data exists
	\q

Start it by doing the following:

	export DATABASE_URL=[your Postgres URL]  # Or use a .env file
	yarn dev

In production:

	yarn build
	yarn start

If you navigate to `http://localhost:3123/` you will see a [Next.js] page with a list of kittens (or an empty list if you haven’t added one).

Your API server is running at `http://localhost:3123/api/kittens`


