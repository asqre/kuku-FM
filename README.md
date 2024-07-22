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
  - Query parameters:
    - `page`: Page number (default: 1)
    - `limit`: Number of items per page (default: 10)
    - `sort`: Field to sort by (default: 'title')
    - `order`: Sort order ('asc' or 'desc', default: 'asc')
    - `genre`: Filter by genre
    - `search`: Search in title and author fields

- `GET /api/audiobooks/:id`: Retrieve details of a specific audiobook

- `POST /api/reviews`: Submit a new review
  - Body: `{ audiobookId, rating, review, userId }`

- `GET /api/reviews/:audiobookId`: Retrieve reviews for a specific audiobook

## Deployment Steps

1. **Backend Deployment**:
   - Set up a MongoDB database (e.g., MongoDB Atlas)
   - Deploy the Node.js application to a hosting service (e.g., Heroku, DigitalOcean)
   - Set environment variables for database connection and other configurations

2. **Frontend Deployment**:
   - Build the React application: `npm run build`
   - Deploy the built files to a static hosting service (e.g., Netlify, Vercel)
   - Configure the deployed frontend to use the backend API URL

## Getting Started

To run this project locally:

1. Clone the repository: