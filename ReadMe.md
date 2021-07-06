# parcel-quote-frontend

User calculates the final price for the delivery of parcels with different weights. To do so, weights must be entered and routes selected in the form.

The project is made of two parts:

- [frontend](https://github.com/Nadieva/parcel-quote-frontend)
- [backend](https://github.com/Nadieva/parcel-quote-backend)

The frontend part shows a form where user selectes the routes and the weight of parcels. Country and price data come from the backend api. But the weight data will updated in the backend api. The backend data are based on Heroku and MongoDB.

## How to use it

Please follow the instructions in your terminal to use the application :

- `git clone https://github.com/Nadieva/parcel-quote-frontend.git`
- `cd parcel-quote-frontend`
- `npm install`
- `npm start`

- You can access the backend api :

  - locally:

    - http://localhost:5000/api/prices
    - http://localhost:5000/api/parcels
    - http://localhost:5000/api/prices

  - remotely:
    - https://parcel-quote.herokuapp.com/api/prices
    - https://parcel-quote.herokuapp.com/api/parcels
    - https://parcel-quote.herokuapp.com/api/parcels

## Installation

- react: version 17.0.2
- react-dom: version 17.0.2
- react-router-dom: version 5.2.0
- concurrently: 6.2.0
- cors
- express : 4.17.1
- mongoose : 5.13.2
- nodemon 2.0.9

## Resources

- [Heroku](https://www.heroku.com/)
- [React](https://github.com/facebook/react)
- [MongoDB](https://www.mongodb.com/)
- [Express](http://expressjs.com/)
