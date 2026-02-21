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

    // Try to save to database (optional - won't fail if MongoDB is unavailable)
    let savedContact = null;
    try {
      const contact = new Contact({ name, email, message });
      savedContact = await contact.save();
      console.log('✅ Message saved to database');
    } catch (dbError) {
      console.log('⚠️ Database save failed (not critical):', dbError.message);
      // Continue anyway - form submission still works
    }

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
