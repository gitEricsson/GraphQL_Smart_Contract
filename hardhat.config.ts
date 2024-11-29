import { config } from './src/config/config';
import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';

const configHardhat: HardhatUserConfig = {
  solidity: '0.8.27',
  defaultNetwork: 'sepolia',
  networks: {
    sepolia: {
      url: config.providerUrl,
      accounts: [config.privateKey],
    },
  },
  paths: {
    sources: './src/contracts',
    tests: './src/test',
    cache: './src/cache',
    artifacts: './src/artifacts',
  },
};

export default configHardhat;
