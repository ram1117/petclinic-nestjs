# Pet Clinic

## Description

**Pet Clinic** is the backend NestJs application for a pet clinic management system. A user will be able to sign up, add pets to account, create appointments for treatments provided by the clinic. A scheduled event will run every Sunday to create appointment slots for each doctor

## Getting Started

### Dependencies

- Need NPM to install the packages needed for the project
- Need Git and Github account to setup and contribute to the project
- Need Docker engine to run Postgres Database in a docker container(Not needed if Postgres is installed locally)

## Installing

Please run the following command to install the npm dependency packages.

```bash
$ npm install
```

Before running the app, you will need to run docker container to use database in your local machine. Run the following command to start the docker postgres image(Docker Desktop or Docker Engine need to be installed for this). If you have postgres installed in your system, you will not need to run the docker.

```bash
$ docker compose up -d
```

Create `.env.development` file at the root of the project and add following keys.

```bash
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<dbname>"
DB_SYNC=true
JWT_SECRET="<add your own secret>"
```

## Running the app

To start the NestJs app, run one of the following commands.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger documentation

You can access swagger documentation at below URL after starting the development server

http://localhost:3001/api/

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Help

Please raise a Github issue for errors or bugs.

https://github.com/ram1117/petclinic-nestjs/issues

## Authors

### Ram Kumar Karuppusamy

[@ram1117](https://github.com/ram1117) <br />
[ram kumar karuppusamy](https://www.linkedin.com/in/ram-kumar-karuppusamy/)

## Version History

- 0.1
  - Initial Release

## License

This project is [MIT](./LICENSE) licensed. See the LICENSE.md file for details
