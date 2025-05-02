# Aquatic Creatures Hub Backend

This is the backend server for the Aquatic Creatures Hub project.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/aquatic-creatures
NODE_ENV=development
```

3. Start the development server:
```bash
npm run dev
```

4. Build the project:
```bash
npm run build
```

5. Start the production server:
```bash
npm start
```

## Project Structure

- `src/` - Source code directory
  - `config/` - Configuration files
  - `models/` - Database models
  - `routes/` - API routes
  - `controllers/` - Route controllers
  - `middleware/` - Custom middleware
  - `utils/` - Utility functions

## API Documentation

The API documentation will be available at `http://localhost:5000/api-docs` once implemented.

## Development

- The server runs on port 5000 by default
- MongoDB is used as the database
- TypeScript is used for type safety
- Express.js is used as the web framework 