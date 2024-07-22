# Audiobook Web Application

## Project Overview

This web application allows users to browse audiobooks, view details, and submit reviews and ratings. It features a responsive front-end interface and a RESTful API backend.

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Application Architecture](#application-architecture)
4. [API Usage](#api-usage)
5. [Deployment Steps](#deployment-steps)
6. [Getting Started](#getting-started)

## Features

- Browse a list of audiobooks with basic details
- Filter audiobooks by genre, author, and rating
- View detailed information about individual audiobooks
- Submit reviews and ratings for audiobooks

## Technology Stack

### Frontend

- React.js
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB

## Application Architecture

The application follows a client-server architecture:

1. **Frontend**: A React application that provides the user interface. It communicates with the backend API to fetch and submit data.

2. **Backend**: An Express.js server that handles API requests, interacts with the database, and serves data to the frontend.

3. **Database**: MongoDB is used to store audiobook information, user reviews, and ratings.

## API Usage

The backend provides the following RESTful API endpoints:

- `GET /api/audiobooks`: Retrieve a list of audiobooks

- `GET /api/audiobooks/:id`: Retrieve details of a specific audiobook

- `POST /api/reviews`: Submit a new review

  - Body: `{ audiobookId, rating, review, userId }`

- `GET /api/reviews/:audiobookId`: Retrieve reviews for a specific audiobook

## Deployment Steps

1. **Backend Deployment**:

   - Set up a MongoDB database (e.g., MongoDB Atlas)
   - Deploy the Node.js application to a hosting service (e.g., Firebase, Heroku, DigitalOcean)
   - Set environment variables for database connection and other configurations

2. **Frontend Deployment**:
   - Build the React application: `yarn build`
   - Deploy the built files to a static hosting service (e.g., Firebase, Netlify, Vercel)
   - Configure the deployed frontend to use the backend API URL

## Screenshots

Here are some screenshots of the application:

### Home Page
![Home Page](./screenshots/home_page.png)
*Browse audiobooks with filtering options*

### Audiobook Details
![Audiobook Details](./screenshots/audiobook_details.png)
*View detailed information about an audiobook*

### Review Submission
![Review Submission](./screenshots/review_submission.png)
*Submit a review for an audiobook*

## Live Demo
You can access a live demo of the application here: [Audiobook Web App Demo](https://kuku-fm-assignment.web.app/)

## Getting Started

To run this project locally:

1. Clone the repository

2. Install dependencies in both client and server folder.

3. Start the server.

```
    cd server
    yarn client
```
