import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

async function runTests() {
  try {
    // Set test environment variables
    process.env.NODE_ENV = 'test';
    process.env.PORT = '5001';
    process.env.MONGODB_URI = 'mongodb://localhost:27017/aquatic-creatures-test';
    process.env.JWT_SECRET = 'test-secret';
    process.env.JWT_EXPIRES_IN = '1h';
    process.env.CLOUDINARY_CLOUD_NAME = 'test-cloud';
    process.env.CLOUDINARY_API_KEY = 'test-key';
    process.env.CLOUDINARY_API_SECRET = 'test-secret';

    // Get the path to the Jest binary in node_modules
    const jestPath = path.resolve(__dirname, '../../node_modules/.bin/jest');
    const configPath = path.resolve(__dirname, '../../jest.config.js');

    // Run the tests
    const { stdout, stderr } = await execAsync(`"${jestPath}" --config "${configPath}"`);

    console.log('Test Output:');
    console.log(stdout);
    if (stderr) {
      console.error('Test Errors:');
      console.error(stderr);
    }
  } catch (error) {
    console.error('Error running tests:', error);
    process.exit(1);
  }
}

runTests(); 