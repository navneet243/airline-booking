# AIRLINE BOOKING

- This consist the backend portion of this project.
- This project is build using microservices architecture.
- Microservices are- 
    - AuthService
    - FlightAndSearchService
    - BookingService

- These microservices are connected through APi Gateway which acted as a intermediate layer btw client request and microservices.

## Project Setup
- Clone the project on your local
- Run `npm install` on the same path as your root directory of microservice.
- Create `.env` file in the root directory and add the following environment variable
    - `PORT-####`
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
  - This will create database.



