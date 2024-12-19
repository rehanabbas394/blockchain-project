const hexToBinary = require('hex-to-binary');
const { GENSIS_DATA, MINING_RATE } = require('./config');
const createHash = require('./cryptoHash');

class Block {
    constructor({ timestamp, PrevHash, hash, difficulty, nonce, data }) {
        this.timestamp = timestamp;
        this.PrevHash = PrevHash;
        this.hash = hash;
        this.data = data;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }

    static gensis() {
        return new this(GENSIS_DATA);
    }

    static mineBlock({ prevBlock, data }) {
        // console.log("============> Mining Block <=============");
        let hash, timestamp;
        let nonce = 0;
        const prevHash = prevBlock.hash;
        let { difficulty } = prevBlock;
        // console.log("time starting", Date.now());
        // console.time("mining time start");
        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: prevBlock, timestamp})
            hash = createHash(timestamp, prevHash, data, difficulty, nonce);
        } while (!hexToBinary(hash).endsWith('0'))
        // while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
        // console.timeEnd("mining time end");
        // console.log("============> Block mined <=============");
        return new this({ timestamp, PrevHash: prevHash, data, hash, nonce, difficulty });
    }

    static adjustDifficulty({originalBlock, timestamp}){
        const { difficulty} = originalBlock;
        if (difficulty < 1) return 1;
        const difference = timestamp - originalBlock.timestamp;

        if (difference > MINING_RATE) return difficulty -1;
        return difficulty + 1;
    }
}

const block1 = new Block({
    timestamp: "12/18/2024",
    PrevHash: '0xa3deed',
    hash: '0x3a3d3d',
    data: 'hello world',
    difficulty: 2,
});
const block2 = Block.gensis();
const block3 = Block.mineBlock({ prevBlock: block1, data: "block2" });
 

module.exports = Block;
