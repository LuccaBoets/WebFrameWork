const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://test:test@cluster0.yc1bb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/post', async (req, res) => {
    await client.connect(async err => {
        const collection = client.db("testD").collection("testC");

        console.log("Connected to MongoDB");

        await collection.insertOne(req.body);
        // perform actions on the collection object
        client.close();
    });
    res.json(req.body);
})

app.get('/api/post', async (req, res) => {
    await client.connect(async err => {
        const collection = client.db("testD").collection("testC");

        console.log("Connected to MongoDB 0");

        console.log(await collection.find({}).toArray());
        res.json(await collection.find({}).toArray());

        // perform actions on the collection object
        client.close();
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})