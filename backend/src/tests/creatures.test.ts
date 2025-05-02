import request from 'supertest';
import { app } from '../app';
import { User } from '../models/User';
import { AquaticCreature } from '../models/AquaticCreature';
import mongoose from 'mongoose';

describe('Creature Endpoints with Authentication', () => {
  let authToken: string;

  beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/aquatic-creatures-test');
  });

  afterAll(async () => {
    // Clean up and close the connection
    await User.deleteMany({});
    await AquaticCreature.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear collections before each test
    await User.deleteMany({});
    await AquaticCreature.deleteMany({});

    // Register and login a user to get token
    const userData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123'
    };

    await request(app).post('/api/auth/register').send(userData);
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: userData.email,
        password: userData.password
      });

    authToken = loginResponse.body.token;
  });

  describe('POST /api/creatures', () => {
    it('should create a new creature with authentication', async () => {
      const creatureData = {
        name: 'Test Fish',
        scientificName: 'Testus fishus',
        description: 'A test fish',
        habitat: 'Test Ocean',
        conservationStatus: 'Least Concern'
      };

      const response = await request(app)
        .post('/api/creatures')
        .set('Authorization', `Bearer ${authToken}`)
        .send(creatureData)
        .expect(201);

      expect(response.body).toHaveProperty('name', creatureData.name);
      expect(response.body).toHaveProperty('scientificName', creatureData.scientificName);
    });

    it('should not create a creature without authentication', async () => {
      const creatureData = {
        name: 'Test Fish',
        scientificName: 'Testus fishus',
        description: 'A test fish',
        habitat: 'Test Ocean',
        conservationStatus: 'Least Concern'
      };

      const response = await request(app)
        .post('/api/creatures')
        .send(creatureData)
        .expect(401);

      expect(response.body).toHaveProperty('message', 'No token provided');
    });
  });

  describe('GET /api/creatures', () => {
    it('should get all creatures without authentication', async () => {
      // Create a test creature
      const creature = new AquaticCreature({
        name: 'Test Fish',
        scientificName: 'Testus fishus',
        description: 'A test fish',
        habitat: 'Test Ocean',
        conservationStatus: 'Least Concern',
        imageUrl: 'test.jpg'
      });
      await creature.save();

      const response = await request(app)
        .get('/api/creatures')
        .expect(200);

      expect(response.body).toHaveLength(1);
      expect(response.body[0]).toHaveProperty('name', 'Test Fish');
    });
  });

  describe('PUT /api/creatures/:id', () => {
    it('should update a creature with authentication', async () => {
      // Create a test creature
      const creature = new AquaticCreature({
        name: 'Test Fish',
        scientificName: 'Testus fishus',
        description: 'A test fish',
        habitat: 'Test Ocean',
        conservationStatus: 'Least Concern',
        imageUrl: 'test.jpg'
      });
      await creature.save();

      const updateData = {
        name: 'Updated Fish',
        description: 'An updated test fish'
      };

      const response = await request(app)
        .put(`/api/creatures/${creature._id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(200);

      expect(response.body).toHaveProperty('name', updateData.name);
      expect(response.body).toHaveProperty('description', updateData.description);
    });

    it('should not update a creature without authentication', async () => {
      // Create a test creature
      const creature = new AquaticCreature({
        name: 'Test Fish',
        scientificName: 'Testus fishus',
        description: 'A test fish',
        habitat: 'Test Ocean',
        conservationStatus: 'Least Concern',
        imageUrl: 'test.jpg'
      });
      await creature.save();

      const updateData = {
        name: 'Updated Fish',
        description: 'An updated test fish'
      };

      const response = await request(app)
        .put(`/api/creatures/${creature._id}`)
        .send(updateData)
        .expect(401);

      expect(response.body).toHaveProperty('message', 'No token provided');
    });
  });

  describe('DELETE /api/creatures/:id', () => {
    it('should delete a creature with authentication', async () => {
      // Create a test creature
      const creature = new AquaticCreature({
        name: 'Test Fish',
        scientificName: 'Testus fishus',
        description: 'A test fish',
        habitat: 'Test Ocean',
        conservationStatus: 'Least Concern',
        imageUrl: 'test.jpg'
      });
      await creature.save();

      await request(app)
        .delete(`/api/creatures/${creature._id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      // Verify the creature is deleted
      const deletedCreature = await AquaticCreature.findById(creature._id);
      expect(deletedCreature).toBeNull();
    });

    it('should not delete a creature without authentication', async () => {
      // Create a test creature
      const creature = new AquaticCreature({
        name: 'Test Fish',
        scientificName: 'Testus fishus',
        description: 'A test fish',
        habitat: 'Test Ocean',
        conservationStatus: 'Least Concern',
        imageUrl: 'test.jpg'
      });
      await creature.save();

      const response = await request(app)
        .delete(`/api/creatures/${creature._id}`)
        .expect(401);

      expect(response.body).toHaveProperty('message', 'No token provided');
    });
  });
}); 