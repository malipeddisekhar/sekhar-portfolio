const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER;

const isEmailConfigured = Boolean(EMAIL_USER && EMAIL_PASS);

// Configure email transporter
const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    })
  : null;

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

// Function to send email notification
const sendEmailNotification = async (contactData) => {
  if (!transporter) {
    throw new Error('Email service is not configured');
  }

  const safeName = escapeHtml(contactData.name);
  const safeEmail = escapeHtml(contactData.email);
  const safeMessage = escapeHtml(contactData.message).replace(/\n/g, '<br/>');

  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_TO,
    replyTo: contactData.email,
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
            <p style="margin: 5px 0; color: #333; font-size: 16px;">${safeName}</p>
          </div>
          
          <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #7c3aed;">
            <p style="margin: 5px 0; color: #666;"><strong>Email:</strong></p>
            <p style="margin: 5px 0; color: #333; font-size: 16px;">
              <a href="mailto:${safeEmail}" style="color: #00d4ff;">${safeEmail}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 5px 0; color: #666;"><strong>Message:</strong></p>
            <p style="margin: 5px 0; color: #333; font-size: 16px; line-height: 1.6;">${safeMessage}</p>
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

    // Send email notification (primary action)
    try {
      await sendEmailNotification({ name, email, message });
      console.log('✅ Email sent successfully to', EMAIL_TO);
    } catch (emailError) {
      console.log('⚠️ Email sending failed:', emailError.message);
      return res.status(500).json({
        message: 'Failed to send message from server. Please use direct email fallback.',
        fallbackTo: EMAIL_TO || 'malipeddisekhar63@gmail.com'
      });
    }

    // Try to save to database (optional - won't fail if MongoDB is unavailable)
    let savedContact = null;
    try {
      const contact = new Contact({ name, email, message });
      savedContact = await contact.save();
      console.log('✅ Message saved to database');
    } catch (dbError) {
      console.log('⚠️ Database save failed (not critical):', dbError.message);
      // Continue anyway - email was sent successfully
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
