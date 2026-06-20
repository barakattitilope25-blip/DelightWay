const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('New contact submission:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message received.' });
});

// Book consultation endpoint
app.post('/api/consultation', (req, res) => {
  const { name, email, phone, service, date, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Name, email, and service are required.' });
  }

  console.log('New consultation booking:', { name, email, phone, service, date, message });
  res.status(200).json({ success: true, message: 'Consultation booked.' });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
