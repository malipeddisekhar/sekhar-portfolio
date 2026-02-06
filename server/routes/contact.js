const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to send email notification
const sendEmailNotification = async (contactData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Portfolio Contact: New message from ${contactData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background: linear-gradient(135deg, #00d4ff, #7c3aed); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Portfolio Message</h1>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #00d4ff;">
            <p style="margin: 5px 0; color: #666;"><strong>Name:</strong></p>
            <p style="margin: 5px 0; color: #333; font-size: 16px;">${contactData.name}</p>
          </div>
          
          <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #7c3aed;">
            <p style="margin: 5px 0; color: #666;"><strong>Email:</strong></p>
            <p style="margin: 5px 0; color: #333; font-size: 16px;">
              <a href="mailto:${contactData.email}" style="color: #00d4ff;">${contactData.email}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 5px 0; color: #666;"><strong>Message:</strong></p>
            <p style="margin: 5px 0; color: #333; font-size: 16px; line-height: 1.6;">${contactData.message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="color: #999; font-size: 12px; margin-bottom: 0;">
            Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

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

    // Send email notification
    try {
      await sendEmailNotification({ name, email, message });
      console.log('✅ Email sent successfully to', process.env.EMAIL_TO);
    } catch (emailError) {
      console.log('⚠️ Email sending failed:', emailError.message);
      // Don't fail the request if email fails, message is saved in DB
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
