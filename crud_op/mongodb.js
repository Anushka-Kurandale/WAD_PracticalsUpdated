const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const database = 'student';
const client = new MongoClient(url);

const dbConnect = async () => {
    try {
        await client.connect(); // Connect to MongoDB
        const db = client.db(database); // Get the database
        return db.collection('profile'); // Return the 'profile' collection
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Throw error for proper handling
    }
};

module.exports = dbConnect;