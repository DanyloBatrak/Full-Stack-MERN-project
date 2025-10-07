import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// use routes
app.use('/posts', postRoutes);

// MongoDB connection
const CONNECTION_URL = 'mongodb+srv://usernameforpractice:usernameforpractice123@cluster0.vmhwutl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.error('MongoDB connection error:', error.message));





