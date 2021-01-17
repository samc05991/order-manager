# order-manager
 
To install
`npm install`

To run the frontend
`npm run serve`

To serve from an express server (required for deployment)
`npm run start`

# Assignment Review

[Github]: https://github.com/samc05991/order-manager/pulls?q=is%3Apr+is%3Aclosed/ "Github"

[Agricafe]: https://agricafe.herokuapp.com/ "Agricafe"

I decided to use Angular for this as I'm most comfortable with it and would be quickest to get going. 

I've created a github repo with the initial app structure and then created a Pull Request from a seperate branch in order to highlight the work I've done compared to the initial app set up. [Github]

The app gets initialised with a lot of boilerplate code/tests, these have been removed. I've set up some unit tests, these can be found in the spec.ts files.

I've launched the app using Heroku, its set up for continuous deployments [Agricafe]

# App Review

In order to get a MVP prototype ready, I worked specifically on two pages. One to add an order, one to manage the orders. I've set up a number of Models including Customer, Order, Product and Task.

A customer can have multiple orders
An order must have a customer and can have multiple products
Multiple products can be added to an order
A task is carried out by Giovanni, it can be to make/serve an order or to take a break.

I've not added any time calculations for tasks as I would assume these would be scheduled by the API.

I've only added Sandwiches as a single type of Product for now and use functions called `getAvailableSandwiches` instead of getProducts as this makes it easier to split products into types later, e.g Tea/Coffee/Drinks/Fruit etc could be viable sets of products.

I just use a singleton for sharing the applications state and its quite easy as its just using local data. When hooking this up to an API it would be better to use NgRx or Observables to share the application state, especially when working with Promises.
