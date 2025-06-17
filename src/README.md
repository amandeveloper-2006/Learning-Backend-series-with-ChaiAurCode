# Source Code Structure

This directory contains the main source code for the Chai Aur Backend project.

## Directory Structure

```
src/
├── controllers/     # Route controllers (business logic)
├── db/             # Database configuration and connection
├── middlewares/    # Custom middleware functions
├── models/         # Database models/schemas
├── routes/         # API route definitions
├── utils/          # Utility functions and helpers
├── app.js          # Express app configuration
├── constants.js    # Application constants
└── index.js        # Application entry point
```

## Purpose of Each Directory

- **controllers/**: Contains the business logic for handling requests
- **db/**: Database connection setup and configuration
- **middlewares/**: Custom middleware for authentication, logging, etc.
- **models/**: Database models and schemas (MongoDB/Mongoose)
- **routes/**: API endpoint definitions and routing
- **utils/**: Helper functions, utilities, and common functions

## Getting Started

1. Start by setting up your database connection in the `db/` directory
2. Define your models in the `models/` directory
3. Create your routes in the `routes/` directory
4. Implement business logic in the `controllers/` directory
5. Add any middleware in the `middlewares/` directory
6. Use utility functions from the `utils/` directory as needed

