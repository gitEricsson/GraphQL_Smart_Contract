import { ethers } from 'ethers';
import { config } from '../config/config';

const contractABI = [
  'function increment() public',
  'function getCounter() public view returns (uint256)',
];

export class Web3Service {
  // private provider: Provider;
  private provider: ethers.providers.JsonRpcProvider;
  private contract: ethers.Contract;
  private wallet: ethers.Wallet;

  constructor() {
    // this.provider = new ethers.JsonRpcProvider(config.providerUrl);
    this.provider = new ethers.providers.JsonRpcProvider(config.providerUrl);
    this.wallet = new ethers.Wallet(config.privateKey, this.provider);
    this.contract = new ethers.Contract(
      config.contractAddress,
      contractABI,
      this.wallet
    );
  }

  async getCounter(): Promise<number> {
    return await this.contract.getCounter();
  }

  async incrementCounter(): Promise<void> {
    await this.contract.increment();
  }
}
