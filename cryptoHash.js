const crypto = require('crypto');
const hexToBinary = require('hex-to-binary');
const CryptoHash = (... inputs) =>{
    const hash = crypto.createHash('sha256');
    hash.update(inputs.sort().join(''))
    return hash.digest('hex');

}

const result = CryptoHash('rehan','abbas');
// console.log(result) 

module.exports = CryptoHash;