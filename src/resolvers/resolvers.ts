import { Web3Service } from '../services/web3service';
import { User } from '../models/user.model';

const web3Service = new Web3Service();

export const resolvers = {
  getCounter: async () => {
    try {
      const counterBigNumber = await web3Service.getCounter(); // Example smart contract method

      // Convert BigNumber to a string
      return counterBigNumber.toString();
    } catch (error) {
      console.error('Error fetching counter:', error);
      throw new Error('Failed to fetch counter value');
    }
  },
  incrementCounter: async () => {
    await web3Service.incrementCounter();
    return 'Counter incremented!';
  },
  getUsers: async () => {
    return await User.find();
  },
  addUser: async ({ name, email }: { name: string; email: string }) => {
    const newUser = new User({ name, email });
    await newUser.save();
    return newUser;
  },
};
