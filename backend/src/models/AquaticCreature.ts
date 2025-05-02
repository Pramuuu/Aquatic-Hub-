import mongoose from 'mongoose';

const aquaticCreatureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  scientificName: {
    type: String,
    required: [true, 'Scientific name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  habitat: {
    type: String,
    required: [true, 'Habitat is required']
  },
  conservationStatus: {
    type: String,
    enum: ['Least Concern', 'Near Threatened', 'Vulnerable', 'Endangered', 'Critically Endangered', 'Extinct in the Wild', 'Extinct'],
    required: [true, 'Conservation status is required']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const AquaticCreature = mongoose.model('AquaticCreature', aquaticCreatureSchema); 