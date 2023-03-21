# Rapper Names App

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS](https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Description

This is a simple full-stack web application that demonstrates CRUD (Create, Read, Update, Delete) operations using HTTP methods. It is built using EJS, Node.js, Express, and MongoDB.

Deployed link: https://rappers-api-lt31.onrender.com/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution and Attribution](#contribution-and-attribution)
- [Technologies](#technologies)
- [Questions](#questions)

## Installation

To get started with this project, first clone the repository and navigate to the project directory: <br/>
`cd Desktop/` <br/>
`git clone https://github.com/HunterPadgett/rappers-api.git` <br/>
`cd rappers-api`

Next, install the dependencies: <br/>
`npm i`

Set up a local MongoDB instance or use a cloud service like MongoDB Atlas. <br/>

Create a .env file in the root directory and add your MongoDB connection string. For example: ```MONGODB_URI=mongodb://localhost:27017/rappers-api```<br/>

Start the development server: <br/>
`npm run watch` or ```npm run start```

This will start the app at http://localhost:6969.

## Usage

To add a new rapper, fill out the form with a rapper's birth name and their stage name then click the "Submit" button. You can then choose to up-vote or down-vote a rapper OR if you're feeling froggy you can even delete a rapper entirely. The list of rapper's dynamically loads based on the number of likes a rapper has.

## Contribution and Attribution

This project was created by [Hunter Padgett](https://hunterpadgett.netlify.app/)

## Technologies

This app was built with EJS, Node.js, Express, and MongoDB.

## Questions

If you would like to see more of my work, checkout my [GitHub](https://github.com/HunterPadgett) repo and my [portfolio](https://hunterpadgett.netlify.app/). If you have any additional questions, please contact me directly at: hunterpadgett.dev@gmail.com
