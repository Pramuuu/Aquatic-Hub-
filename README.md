# Aquatic Creatures Hub

A full-stack web application for managing and exploring aquatic creatures, featuring authentication, file uploads, and a modern UI.

## Features

- **User Authentication**
  - Secure registration and login system
  - JWT-based authentication
  - Role-based access control (User/Admin)
  - Protected routes and endpoints

- **Aquatic Creatures Management**
  - CRUD operations for aquatic creatures
  - Detailed creature information (name, scientific name, habitat, etc.)
  - Image upload and management using Cloudinary
  - Conservation status tracking

- **Modern UI/UX**
  - Responsive design
  - Form validation
  - Real-time feedback
  - Intuitive navigation

## Tech Stack

### Frontend
- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Context API** - State management
- **Tailwind CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Multer** - File upload handling
- **Cloudinary** - Cloud storage for images
- **Bcrypt** - Password hashing

### Testing
- **Jest** - Test runner
- **Supertest** - API testing
- **ts-jest** - TypeScript testing support

## Project Structure

```
aquatic-creature-insights-hub/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # React context providers
│   │   ├── services/        # API service functions
│   │   └── App.tsx         # Main application component
│   └── package.json
│
└── backend/                  # Node.js backend
    ├── src/
    │   ├── config/         # Configuration files
    │   ├── controllers/    # Request handlers
    │   ├── middleware/     # Custom middleware
    │   ├── models/         # Database models
    │   ├── routes/         # API routes
    │   ├── tests/          # Test files
    │   ├── app.ts         # Express application
    │   └── index.ts       # Server entry point
    └── package.json
```

## Key Concepts Implemented

### Authentication System
- JWT-based authentication flow
- Password hashing with bcrypt
- Protected routes using middleware
- Role-based access control
- Token-based session management

### File Upload System
- Multer middleware for file handling
- Cloudinary integration for cloud storage
- Image transformation and optimization
- Secure file upload validation

### Database Design
- MongoDB schema design
- Mongoose models with TypeScript
- Document relationships
- Data validation and sanitization

### API Design
- RESTful API endpoints
- Error handling middleware
- Request validation
- Response formatting
- Rate limiting (if implemented)

### Frontend Architecture
- Component-based architecture
- State management with Context API
- Form handling and validation
- Protected route implementation
- API service layer

### Testing Strategy
- Unit tests for models and utilities
- API endpoint testing
- Authentication flow testing
- File upload testing
- Integration tests

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account
- Git

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=1h
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Creature Endpoints
- `GET /api/creatures` - Get all creatures
- `POST /api/creatures` - Create a new creature
- `PUT /api/creatures/:id` - Update a creature
- `DELETE /api/creatures/:id` - Delete a creature

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
