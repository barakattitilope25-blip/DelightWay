const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/consultation', (req, res) => {
  const { name, email, phone, service, date, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Name, email, and service are required.' });
  }

  console.log('New consultation booking:', { name, email, phone, service, date, message });
  res.status(200).json({ success: true, message: 'Consultation booked.' });
});

module.exports = app;
