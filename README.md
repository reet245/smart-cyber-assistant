# PhishNet – Intelligent Threat Analyzer

SecureChat AI is a simple web app that helps users check whether a message or link looks suspicious.  
Users can type or speak a message, and the system analyzes it for possible phishing or cyber threats.

The goal of this project is to combine JavaScript, basic AI-style logic, and cybersecurity concepts in one practical application.

---

## What This Project Does

- Takes user input through:
  - Text
  - Voice (microphone)
- Analyzes the message for:
  - Phishing keywords
  - Suspicious URLs
  - Fake brand domains
- Generates:
  - Risk level (Low, Medium, High)
  - Clear security reasons
  - Safety advice
- Speaks the result using text-to-speech

---

## Main Features

- Voice input and voice output
- Real-time message processing using Socket.IO
- Phishing keyword detection
- URL structure analysis
- Risk scoring system
- Cyber safety tips with every response

---

## Technologies Used

- Frontend:
  - HTML
  - CSS
  - JavaScript
  - Web Speech API

- Backend:
  - Node.js
  - Express.js
  - Socket.IO

- Cybersecurity Concepts:
  - Phishing detection
  - Social engineering indicators
  - Malicious URL patterns
  - Risk-based classification

---

## Project Structure
securechat-ai
├── index.js
├── package.json
├── views
│ └── index.html
└── public
├── js
│ └── script.js
└── css
└── style.css
---

## How To Run This Project

1. Clone the repository

2. Go into the project folder

3. Install dependencies

4. Start the server

5. Open your browser and go to
---

## How It Works

1. User types or speaks a message or URL.
2. The backend checks for:
   - Phishing-related words
   - Suspicious URL patterns
   - Fake brand domains
3. A risk score is calculated.
4. The system returns:
   - Risk level (Low / Medium / High)
   - Security reason
   - Safety advice
5. The result is also spoken using text-to-speech.


