const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// MongoDB Connection (optional - server works without it)
const MONGODB_URI = process.env.MONGODB_URI;

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch((err) => console.log('⚠️ MongoDB Connection Error (non-fatal):', err.message));
} else {
  console.log('ℹ️ Running without MongoDB - contact form will not save messages');
}

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// LeetCode Stats endpoint (server-side fetch to avoid CORS)
app.get('/api/leetcode/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const response = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
    
    if (response.ok) {
      const data = await response.json();
      res.json({
        totalSolved: data.totalSolved || 0,
        easySolved: data.easySolved || 0,
        mediumSolved: data.mediumSolved || 0,
        hardSolved: data.hardSolved || 0,
        ranking: data.ranking || 0
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log('LeetCode fetch error:', error.message);
    res.status(500).json({ message: 'Failed to fetch LeetCode stats' });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Sekhar Portfolio API is running!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
