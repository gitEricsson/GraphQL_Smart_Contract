import hre from 'hardhat';
import '@nomiclabs/hardhat-ethers';

async function main() {
  const Counter = await hre.ethers.getContractFactory('Counter');
  const counter = await Counter.deploy();

  await counter.deployed();

  console.log('Counter contract deployed at:', counter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
