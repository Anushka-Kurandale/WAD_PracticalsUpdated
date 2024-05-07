// index.js
const express = require('express');
const dbConnect = require('./mongodb'); // Import dbConnect function from mongodb.js

const app = express();
app.use(express.json());

//get api
app.get('/getData', async (req, res) => {
  
        const profileCollection = await dbConnect(); 
        const profiles = await profileCollection.find().toArray(); 
        res.json(profiles); 
});

//post api
app.post('/insertData', async (req, res) => {
       const profileCollection = await dbConnect();
        const result = await profileCollection.insertOne(req.body);
        res.send("data inserted successfully");
});

//update api
app.put('/:name', async(req, res) => {
        const profileCollection = await dbConnect();
        const result = await profileCollection.updateOne({name:req.params.name},{$set:req.body});
        res.send("data updated successfully");
});

//delete api
app.delete('/:name', async(req, res) => {
        const profileCollection = await dbConnect();
        const result = await profileCollection.deleteOne({name:req.params.name});
        res.send("data deleted successfully");
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});