const { join } = require('path');
const Block = require('./block');
const CryptoHash = require('./cryptoHash');
const { MINING_RATE } = require('./config');

class Blockchain {
    constructor(){
        this.chain = [Block.gensis()]
    }

    addBlock({data}){
        const newBlock = Block.mineBlock({
            prevBlock: this.chain[this.chain.length-1],
            data
        })
        this.chain.push(newBlock)
    }

    replaceChain(chain){
        if(chain<= this.chain.length){
            console.error('The incoming chain must be longer')
            return
        }
        if (!Blockchain.IsValidChain(chain)){
            console.error('The incoming chain must be valid')
            return
        }
        this.chain = chain

    }

    static IsValidChain(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.gensis())){
            return false
        }
        for (let i=1; i < chain.length ; i++){
            const { timestamp, PrevHash, hash, data, difficulty, nonce } = chain[i];
            const actualPrevHash = chain[i - 1].hash;

            const lastDifficulty = chain[i-1].difficulty;
    
            if (PrevHash !== actualPrevHash) {
                return false;
            }
    
            const validateHash = CryptoHash(timestamp, PrevHash, data, difficulty, nonce);
            if (hash !== validateHash) {
                return false;
            }

            if ( lastDifficulty - difficulty > 1){
                return false
            }
        }
        return true
    }
}

const blockchain = new Blockchain()
blockchain.addBlock({data: 'block1'}) 
blockchain.addBlock({data: 'block2'})


const result = Blockchain.IsValidChain(blockchain.chain);
// console.log('Is valid chain:', result);
// console.log(blockchain)



module.exports = Blockchain;