const Blockchain = require('./blockchain');
const blockchain = new Blockchain();

blockchain.addBlock({data: 'block1'})

console.log(blockchain.chain[blockchain.chain.length-1])
let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;
const time = []

for ( let i=0; i<1000; i++){
    prevTimestamp = blockchain.chain[blockchain.chain.length-1].timestamp;
    blockchain.addBlock({data: `block${i}`});

    nextBlock = blockchain.chain[blockchain.chain.length-1];
    nextTimestamp = nextBlock.timestamp;
    timeDiff = nextTimestamp - prevTimestamp;
    time.push(timeDiff);

    const averageTime = time.reduce((total, num) => total + num) / time.length;
    console.log(`Time to mine block: ${timeDiff}ms. Difficulty: ${nextBlock.difficulty}. Average time: ${averageTime}ms`)
}