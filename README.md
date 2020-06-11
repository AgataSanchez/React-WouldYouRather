# React-WouldYouRather

The objective of this application is the creation, display and voting of questions in the form 'Would you rather ?. To be able to use the application it will be necessary to log in and after that, you will be able to access the questions already created, divided in turn into 'answered' and 'not answered'. You can also create new questions, answer them and see the results of the voting.

## TL;DR
To get started developing right away:
   * install all project dependencies with npm install
   * start the development server with npm start
## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── index.html # DO NOT MODIFY
|   └── logos.png # React logos
|   
└── src
    ├── App.css # Styles for the app. 
    ├── actions
    |   ├── authedUser.js # Actions to authetication user
    │   ├── questions.js # Actions to questions (saveQuestion, addQuestion, saveQuestionAnswer)
    |   ├── shared.js # Actions to get users, questions and set authentication user
    |   └── users.js # Action to users (saveQuestion, getUsers, saveQuestionAnswer)
    ├── components
    |   ├── App.js # This is the root of the app. Contains static HTML right now.
    │   ├── Home.js # Component to show the answeres and notansweres questions
    |   ├── LeaderBoard.js # Component to show the ranking users
    |   ├── Login.js # Component to login user
    |   ├── Nav.js # Function to show the navBar with the Link to Components 'Home' 'New Question' 'LeaderBoard'
    |   ├── NewQuestion.js # Component to create the new questions
    |   ├── Page404.js # Component to show the page 404 when the page is not found
    |   ├── PrivateRoute.js # Function to create a new PrivateRoute with requirements
    │   ├── ProgressBar.js # Function to create and custom progress bar
    |   ├── Question.js # Component to show the one question
    |   ├── QuestionPAge.js # Component to show the question answered or vote answer
    |   └── User.js #Component to show the users in the ranking of LeaderBoard
    ├── middleware  
    |   ├── index.js # Apply all middlewares 
    |   └── logger.js # Show actions of the aplication
    ├── reducers
    |   ├── authedUser.js # Reducers to switch the action.type authetication user
    │   ├── index.js # Apply all reducers
    |   ├── questions.js # Reducers to switch the action.type of questions
    |   └── users.js # Reducers to switch the action.type of users
    ├── utils
    |   ├── _DATA.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    │   ├── api.js # Functions to call the _DATA functions
    |   └── helpers.js #  Call the api's functions
```
## Backend Server
To simplify your development process, we've provided a backend server for you to develop against. The provided file [`_DATA.js`](src/utils/_DATA.js) contains the methods you will need to perform necessary operations on the backend:

* [`getQuestions`](#getQuestions)
* [`getUsers`](#getUsers)
* [`saveQuestion`](#saveQuestion)
* [`saveQuestionAnswer`](#saveQuestionAnswer)

### `getQuestions`
    
Method Signature:
```js
    _getQuestions
```
Returns a Promise which resolves to a JSON object containing a collection of questions objects.
This collection represents the questions currently in the dashboard in your app.

### `getUsers`

Method Signature:
```js
    _getUsers
```
Returns a Promise which resolves to a JSON object containing a collection of users objects.
This collection represents the users currently in the backend in your app.

### `saveQuestion`

Method Signature:
```js
    _saveQuestion(question)
```
question: <Object> containing at  id, timestamp, author, optionOne<Object>, optionTwo<Object> with votes and text
Returns a Promise which resolves to a JSON object containing the response data of request saveQuestion

### `saveQuestionAnswer`

Method Signature:
```js
    _saveQuestionAnswer({ authedUser, qid, answer })
```
authedUser: <String> The logged-in user 
qid: <String> The question id to response
answer: <Object> The answer to the question with the text of the option
Returns a Promise which resolves to a JSON object containing the response data of request saveQuestionAnswer

### Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
