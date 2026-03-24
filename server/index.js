const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

const app = express();

const defaultAllowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://malipeddisekhar.me',
  'https://www.malipeddisekhar.me'
];

const envOrigins = [
  process.env.CLIENT_URL,
  process.env.CLIENT_URLS
]
  .filter(Boolean)
  .flatMap((value) => value.split(',').map((origin) => origin.trim()).filter(Boolean));

const allowedOrigins = new Set([...defaultAllowedOrigins, ...envOrigins]);

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server, curl, Postman (no Origin header)
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked for origin: ${origin}`));
  },
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
  const fallbackStats = {
    totalSolved: 50,
    easySolved: 25,
    mediumSolved: 20,
    hardSolved: 5,
    ranking: 0
  };

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
      res.json(fallbackStats);
    }
  } catch (error) {
    console.log('LeetCode fetch error:', error.message);
    res.json(fallbackStats);
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
