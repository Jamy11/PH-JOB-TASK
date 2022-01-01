const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3fsfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        const database = client.db('phjob')
        const usersCollection = database.collection('users');

        // registraion add user to database
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            console.log(result);
            res.json(result);
        });

        //check admin
        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            let isAdmin = false;
            if (user?.type === 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });
        })

        // get all the users
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find({})
            const result = await cursor.toArray()
            const resWithoutAdmin = result.filter(obj=> obj.type !== 'admin')
            res.json(resWithoutAdmin)
        })

        // block or unblock user
        app.put('/users/', async (req, res) => {
            const user = req.body;
            let block = ''
            if(user.block_status === undefined || user.block_status === '' || user.block_status === null || user.block_status == 'false'){
                block = true
            }
            else{
                block = false
            }
            const filter = { _id: ObjectId(user._id) };
            const options = { upsert: true };
            const updateDoc = { $set: {block_status : block} };
            const result = await usersCollection.updateOne(filter, updateDoc, options );
            res.json(result);
        })
        
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello Job portal!')
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})