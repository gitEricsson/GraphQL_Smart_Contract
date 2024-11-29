import mongoose from 'mongoose';
import app from './app';
import { config } from './config/config';

const DB = config.mongoUri.replace(
  '<PASSWORD>',
  config.mongoPassword as string
);

const startServer = async () => {
  try {
    await mongoose.connect(DB as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

  app.listen(config.port || 4000, () => {
    console.log('Server running at http://localhost:4000/graphql');
  });
};

startServer();
