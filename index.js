const express = require('express');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/ticket.route');
const messageRoutes = require('./routes/message.route');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const port = process.env.PORT || 8000;

// MongoDB connection
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const app = express();
// Middleware
app.use(express.json());
app.use(cors());

// Use the ticket routes and message routes
app.use('/api/ticket', ticketRoutes);
app.use('/api/message', messageRoutes);

// Ping route
app.get('/ping', (req, res) => {
  res.send('Hi, From Conversation Server.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
