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

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

## Tables

#### City -> id, name, created_at, updated_at
#### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)

- Execute `npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`
- This generates:
  * A model file: models/airport.js
  * A migration file in the migrations/ directory.

- Execute `npx sequelize-cli db:migrate` for migration to database

