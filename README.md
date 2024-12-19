# Blockchain Project

This project is a simple implementation of a blockchain, written in JavaScript. It allows users to create and manage a blockchain, add new blocks, and retrieve the blockchain data through API endpoints.

---

## Features
- **Genesis Block**: Automatically initializes the blockchain with a genesis block.
- **Mining Blocks**: Implements a proof-of-work mechanism to add new blocks.
- **Dynamic Difficulty Adjustment**: Automatically adjusts the mining difficulty based on the mining rate.
- **API Endpoints**: Provides endpoints to retrieve the blockchain and mine new blocks.

---

## Requirements
- Node.js (v20 or higher)
- npm or yarn

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rehanabbas394/blockchain-project.git
   cd blockchain-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   node index.js
   ```

---

## Usage

### API Endpoints

#### 1. **GET /api/chain**
   - **Description**: Retrieves the entire blockchain.
   - **Response**:
     ```json
     {
       "chain": [
         {
           "timestamp": "...",
           "PrevHash": "...",
           "hash": "...",
           "data": "...",
           "difficulty": 1,
           "nonce": 0
         }
       ]
     }
     ```

#### 2. **POST /api/mine**
   - **Description**: Mines a new block and adds it to the blockchain.
   - **Request Body**:
     ```json
     {
       "data": "Block data"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Block mined successfully!",
       "chain": [
         {
           "timestamp": "...",
           "PrevHash": "...",
           "hash": "...",
           "data": "...",
           "difficulty": 1,
           "nonce": 0
         }
       ]
     }
     ```

---

## Project Structure

```
blockchain-project/
|-- config.js          # Configuration for mining rate and genesis block
|-- cryptoHash.js      # Utility for generating hashes
|-- blockchain.js      # Blockchain implementation
|-- block.js           # Block class implementation
|-- index.js           # Application entry point and API routes
|-- README.md          # Project documentation
```

---

## Configuration

You can adjust the mining rate and genesis block data in the `config.js` file:

```javascript
module.exports = {
    GENESIS_DATA: {
        timestamp: '01/01/2022',
        PrevHash: '0x0',
        hash: '0x123',
        data: [],
        difficulty: 1,
        nonce: 0
    },
    MINING_RATE: 1000 // in milliseconds
};
```

---

## Example

1. Start the server:
   ```bash
   node index.js
   ```

2. Mine a new block:
   ```bash
   curl -X POST http://localhost:3000/api/mine -H "Content-Type: application/json" -d '{"data": "Block data"}'
   ```

3. Fetch the blockchain:
   ```bash
   curl http://localhost:3000/api/chain
   ```

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
This project is a simplified educational implementation of blockchain concepts. It is not intended for production use.

