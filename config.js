const INITIAL_DIFFICULTY = 2;
const MINING_RATE = 1000; // 1 second
const GENSIS_DATA = {
    "timestamp": 0,
    "PrevHash": "000000",
    "hash": "0x3nd8ks234555555555555555555555555555555",
    "difficulty": INITIAL_DIFFICULTY,
    "nonce": 0,
    "data": ["hello world", 'hello world2']
}

module.exports = { GENSIS_DATA, MINING_RATE, INITIAL_DIFFICULTY };