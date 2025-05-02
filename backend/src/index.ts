import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import aquaticCreatureRoutes from './routes/aquaticCreatureRoutes';
import authRoutes from './routes/authRoutes';
import { auth } from './middleware/auth';
import { app } from './app';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/creatures', auth, aquaticCreatureRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Aquatic Creatures Hub API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 