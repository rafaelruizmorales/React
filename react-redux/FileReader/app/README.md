# Smart Pension - FE Engineer Test

👋 Hi there!

My name is Rafael Ruiz. I am a software engineer and I am very passionate about my profession and what it involves, from coding to communication and coordination with different people. 

In my current job, I work with a microservices architecture, several APIs, a back-end BFF system that uses Java / Spring boot as well as a front-end that uses JavaScript ES6, TypeScript, React and Redux.

Here you will see the code I have developed for the tecnical test given. I have treated it with a lot of care and you will notice some things such as the use of a consistent formatting across repo (linter), the use of the Smart Pension favicon and colors and many other little details.

I hope you enjoy checking it, as much as I did creating this.

Thanks for this opportunity, I am looking forward for your feedback and comments!


## Getting Started with this project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Since the node modules are not included by default, in order to be able to start the project you will need to tun the following command from the project directory:

```
yarn install
// or
npm install
```

## Available Scripts

In the project directory, you can run:

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

- PageHeader:
    
    `Component to show the main title of the page.`

- FileInputContainer:

    `Component in charge of selecting the data store in redux (contents of the file we read) and transform it to create a structure we can later work with`

- WebpagesWithTotalPageViews:
    
    `Component that receives the lines readed and creates a structure with total page views ordered from most to least page views that is passed to the Table component to be displayed`

- webpagesWithTotalUniquePageViews:
    
    `Component that receives the lines readed and creates a structure with total unique page views also ordered from most to least page views that is passed to the Table component to be displayed`

- Table:

    `The main functionality of this component is just to display data in tabular form. It receive 2 props: data, which is the data to display and title, which is a short title displayed at the top of the table`

## Super short version on how does the application work?

When the we `webserver.log` file located at the public folder gets uploaded, its contents are stored in Redux. From here, we can use `useSelector` to get contents of the file and start working with data. The rest is basically passing different data to different components by using props and finally display it.
