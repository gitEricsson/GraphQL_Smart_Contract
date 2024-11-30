# GraphQL Smart Contract

## Overview

This project is a GraphQL server that interacts with an Ethereum smart contract using Hardhat and Ethers.js. The server allows users to increment a counter stored on the blockchain and retrieve its current value. It also includes a MongoDB database for user management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Smart Contract](#smart-contract)
- [Contributing](#contributing)
- [License](#license)

## Features

- GraphQL API for interacting with a smart contract.
- Increment and retrieve a counter stored on the Ethereum blockchain.
- User management with MongoDB.
- Environment variable configuration for sensitive data.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **GraphQL**: Query language for APIs.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.
- **Hardhat**: Development environment for Ethereum.
- **MongoDB**: NoSQL database for storing user data.
- **TypeScript**: Superset of JavaScript for type safety.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/simple_graphql_smart_contract.git
   cd simple_graphql_smart_contract
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGODB_URI=your_mongodb_uri
   MONGO_PASSWORD=your_mongo_password
   PORT=4000
   CONTRACT_ADDRESS=your_contract_address
   PROVIDER_URL=https://your_provider_url
   PRIVATE_KEY=your_private_key
   INFURA_PRIVATE_KEY=your_infura_private_key
   ```

## Configuration

The project uses a configuration file located at `src/config/config.ts`. This file loads environment variables and provides them to the application. Ensure that you have the correct values set in your `.env` file.

## Running the Project

1. Compile the TypeScript code:

   ```bash
   npm run build
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. The server will run at `http://localhost:4000/graphql`.

## API Endpoints

### Queries

- **getCounter**: Retrieves the current value of the counter from the smart contract.

  **Example Query**:

  ```graphql
  query {
    getCounter
  }
  ```

- **getUsers**: Retrieves a list of users from the MongoDB database.

  **Example Query**:

  ```graphql
  query {
    getUsers {
      id
      name
      email
    }
  }
  ```

### Mutations

- **incrementCounter**: Increments the counter in the smart contract.

  **Example Mutation**:

  ```graphql
  mutation {
    incrementCounter
  }
  ```

- **addUser**: Adds a new user to the MongoDB database.

  **Example Mutation**:

  ```graphql
  mutation {
    addUser(name: "John Doe", email: "john@example.com") {
      id
      name
      email
    }
  }
  ```

## Smart Contract

The smart contract is located in `src/contracts/Counter.sol`. It includes the following functions:

- **increment**: Increments the counter and emits an event.
- **getCounter**: Returns the current value of the counter.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
