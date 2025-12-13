'use strict';

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Socket connection
io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('chat message', (text) => {
    console.log('Message:', text);

    // 🔐 Phishing detection logic
    const phishingKeywords = [
      'verify', 'account', 'bank', 'password', 'urgent',
      'click', 'free', 'offer', 'refund', 'lottery'
    ];

    const urlPattern = /(http|https):\/\/[^\s]+/g;

    let score = 0;
    let reasons = [];

    phishingKeywords.forEach(word => {
      if (text.toLowerCase().includes(word)) {
        score++;
        reasons.push(`Suspicious keyword: ${word}`);
      }
    });

    if (urlPattern.test(text)) {
      score += 2;
      reasons.push('Suspicious URL detected');
    }

    let risk = 'Low';
    if (score >= 3) risk = 'Medium';
    if (score >= 5) risk = 'High';

    const reply = `
Risk Level: ${risk}
Reasons: ${reasons.length ? reasons.join(', ') : 'No major threat detected'}
`;

    socket.emit('bot reply', reply);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
