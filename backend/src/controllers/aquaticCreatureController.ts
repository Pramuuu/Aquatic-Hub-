import { Request, Response } from 'express';
import { AquaticCreature } from '../models/AquaticCreature';
import { upload } from '../config/upload';

// Get all aquatic creatures
export const getAllCreatures = async (req: Request, res: Response) => {
  try {
    const creatures = await AquaticCreature.find().sort({ createdAt: -1 });
    res.status(200).json(creatures);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching creatures', error });
  }
};

// Get a single aquatic creature
export const getCreatureById = async (req: Request, res: Response) => {
  try {
    const creature = await AquaticCreature.findById(req.params.id);
    if (!creature) {
      return res.status(404).json({ message: 'Creature not found' });
    }
    res.status(200).json(creature);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching creature', error });
  }
};

// Create a new aquatic creature with image upload
export const createCreature = async (req: Request, res: Response) => {
  try {
    const { name, scientificName, description, habitat, conservationStatus } = req.body;
    const imageUrl = req.file ? (req.file as any).path : req.body.imageUrl;

    const creature = new AquaticCreature({
      name,
      scientificName,
      description,
      habitat,
      conservationStatus,
      imageUrl
    });

    const savedCreature = await creature.save();
    res.status(201).json(savedCreature);
  } catch (error) {
    res.status(400).json({ message: 'Error creating creature', error });
  }
};

// Update an aquatic creature with optional image upload
export const updateCreature = async (req: Request, res: Response) => {
  try {
    const { name, scientificName, description, habitat, conservationStatus } = req.body;
    const imageUrl = req.file ? (req.file as any).path : req.body.imageUrl;

    const updateData = {
      name,
      scientificName,
      description,
      habitat,
      conservationStatus,
      ...(imageUrl && { imageUrl })
    };

    const creature = await AquaticCreature.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!creature) {
      return res.status(404).json({ message: 'Creature not found' });
    }
    res.status(200).json(creature);
  } catch (error) {
    res.status(400).json({ message: 'Error updating creature', error });
  }
};

// Delete an aquatic creature
export const deleteCreature = async (req: Request, res: Response) => {
  try {
    const creature = await AquaticCreature.findByIdAndDelete(req.params.id);
    if (!creature) {
      return res.status(404).json({ message: 'Creature not found' });
    }
    res.status(200).json({ message: 'Creature deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting creature', error });
  }
}; 