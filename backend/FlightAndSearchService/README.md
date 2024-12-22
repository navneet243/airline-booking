## Welcome to Flights Service

## Project Setup
- Clone the project on your local
- Run `npm install` on the same path as your root directory
- Create `.env` file in the root directory and add the following environment variable
    - `PORT-5000`
- Inside the `src/config` folder, create new file `config.json`and then add this json

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```
- Execute `npx sequelize db:create` once you added your db config as listed above

## DB Design
    - Airplane Table
    - Flight
    - Airport
    - City
