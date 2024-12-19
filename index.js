const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
PORT = 3000;
const blockchain = new Blockchain();

app.use(express.json());

app.get('/api/chain', async(req,res)=>{
    res.json(blockchain.chain)
})

app.post('/api/mine', async(req,res)=>{
    try {
        const { data } = req.body;
        blockchain.addBlock({ data });
        console.log(`New block mined with data: ${data}`);
        res.status(201).json({ message: "Block mined successfully!", chain: blockchain.chain });
    } catch (error) {
        res.status(500).json({ error: "Failed to mine the block.", details: error.message });
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})