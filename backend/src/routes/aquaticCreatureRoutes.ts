import express from 'express';
import {
  getAllCreatures,
  getCreatureById,
  createCreature,
  updateCreature,
  deleteCreature
} from '../controllers/aquaticCreatureController';
import { upload } from '../config/upload';
import { auth } from '../middleware/auth';

const router = express.Router();

// Get all creatures
router.get('/', getAllCreatures);

// Get a single creature
router.get('/:id', getCreatureById);

// Create a new creature with image upload
router.post('/', auth, upload.single('image'), createCreature);

// Update a creature with optional image upload
router.put('/:id', auth, upload.single('image'), updateCreature);

// Delete a creature
router.delete('/:id', auth, deleteCreature);

export default router; 