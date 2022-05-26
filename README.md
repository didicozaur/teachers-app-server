# Learn Today App

This is the BACKEND repo for our online learning app. 

The frontend repo for this project can be found here: https://github.com/didicozaur/teachers-app-client;

## Description

We created this project to help students connect with teachers from all over the world. 
In this app, you can find and connect with someone with experience in a certain area, who will be able to help you learn a subject you're interested in!

Some of the included functionalities are:
- The ability to create, edit and delete teacher Ads;
- The ability to create new subjects;
- The ability to search for ads using keywords;
- The ability to access your chosen teacher's contact information

## How to run

In the project directory, you can run:

### `npm start` inside the client (FRONTEND) repo
- Runs the app in the development mode.
- The page will reload when you make changes.
- You may also see any lint errors in the console.
### `npm run dev` inside the server (BACKEND) repo
- Connects you to MongoDB, allows for the information on your database to be accessed

## Dependencies to install
Run `npm install` to install the following dependencies:

    "bcrypt": "^5.0.1",
    "bcryptjs": "^2.4.3",
    "connect-mongo": "^4.6.0",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-jwt": "^7.7.1",
    "express-session": "^1.17.3",
    "hbs": "^4.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.3",
    "morgan": "^1.10.0",
    "serve-favicon": "^2.5.0"

## What to include in your .env file:
`PORT=3000`
`ORIGIN=http://localhost:3001`
`TOKEN_SECRET={some text of your choosing}`

## Demo
Netlify link: https://learn-today-md.netlify.app