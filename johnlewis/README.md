# John Lewis & Partners - FE Engineer Test

👋 Hi there!

My name is Rafael Ruiz. I am a software engineer and I am very passionate about my profession and what it involves, from coding to communication and coordination with different people. 

In my current job, I work with a microservices architecture, several APIs, a back-end BFF system that uses Java / Spring boot as well as a front-end that uses JavaScript ES6, TypeScript, React and Redux.

Here you will see the code I have developed for the tecnical test given.

I hope you enjoy checking it, as much as I did creating this.

Thanks for this opportunity, I am looking forward for your feedback and comments!


## Getting Started with this project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Since the node modules are not included by default, in order to be able to start the project you will need to tun the following command from both the server and the client folders of the project:

```
yarn install
// or
npm install
```

## Available Scripts

In both the server and the client, you can run:

```
yarn start
// or
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
yarn test
// or
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Technologies this project uses

- React
- Redux
- TypeScript
- CSS

## Short description of the different components created
  - App: The App component contains the Rooter of the application as well as a Provider to be able to access to the redux Store where the list of products is stored

  - DynamicAttrinutesTable: Simple component to show the Dynamic Attrinutes of a product in a tabular form
  
  - PageHeader: Header of the page, accepts the title of the page as well as an optional back button to the Product Grif page.
  
  - PriceFormatter: Component that given a currency an amount and where to display the currency symbol, will display a price.
  
  - Product: Shows a product on the product grid, with its main image, price, url, etc.

## Dificulties and decisions made
At the begining, I tried to make this projects as simple as possible, so I did not create a backend for it and went directy to create a frontEnd project. The problem came when trying to do calls to the API endpoints provided, the server did not allow Cross Origin request from localhost. I had to create a backEnd Node Express server to act as a proxy for the requests I have done in the React/Redux/TypeScript applicat/ion.
