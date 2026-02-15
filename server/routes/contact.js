const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save to database
    const contact = new Contact({ name, email, message });
    const savedContact = await contact.save();

    console.log('✅ New contact message saved:', { name, email, timestamp: new Date().toISOString() });

    res.status(201).json({ 
      message: 'Message sent successfully!', 
      data: savedContact 
    });
  } catch (error) {
    console.log('❌ Contact form error:', error.message);
    res.status(400).json({ message: error.message });
  }
});

// Get all messages (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
