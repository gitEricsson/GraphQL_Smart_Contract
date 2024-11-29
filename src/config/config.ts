import dotenv from 'dotenv';
dotenv.config();

export const config = {
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/web3demo',
  mongoPassword: process.env.MONGO_PASSWORD,
  port: process.env.PORT || 4000,
  contractAddress: process.env.CONTRACT_ADDRESS || '',
  providerUrl: process.env.PROVIDER_URL || '',
  privateKey: process.env.PRIVATE_KEY || '',
  infuraPrivateKey: process.env.INFURA_PRIVATE_KEY || '',
};
