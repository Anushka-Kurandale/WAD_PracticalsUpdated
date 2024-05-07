const express = require('express');
const path = require('path');

const app = express();
 // Use the port provided by the environment or default to 3000

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000; // Use port 5000 instead of 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});