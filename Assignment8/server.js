const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock data to simulate database
const userAnalytics = [
  {
    "userId": 1,
    "session_duration": 120,
    "pages_visited": 5,
    "location": "New York, USA",
    "device_type": "Desktop"
  },
  {
    "userId": 2,
    "session_duration": 95,
    "pages_visited": 3,
    "location": "London, UK",
    "device_type": "Mobile"
  },
  {
    "userId": 3,
    "session_duration": 300,
    "pages_visited": 10,
    "location": "Sydney, Australia",
    "device_type": "Tablet"
  },
  {
    "userId": 4,
    "session_duration": 45,
    "pages_visited": 2,
    "location": "Tokyo, Japan",
    "device_type": "Desktop"
  },
  {
    "userId": 5,
    "session_duration": 180,
    "pages_visited": 6,
    "location": "Berlin, Germany",
    "device_type": "Mobile"
  },
  {
    "userId": 6,
    "session_duration": 240,
    "pages_visited": 8,
    "location": "San Francisco, USA",
    "device_type": "Tablet"
  },
  {
    "userId": 7,
    "session_duration": 75,
    "pages_visited": 4,
    "location": "Toronto, Canada",
    "device_type": "Desktop"
  },
  {
    "userId": 8,
    "session_duration": 50,
    "pages_visited": 2,
    "location": "Beijing, China",
    "device_type": "Mobile"
  },
  {
    "userId": 9,
    "session_duration": 190,
    "pages_visited": 7,
    "location": "Paris, France",
    "device_type": "Desktop"
  },
  {
    "userId": 10,
    "session_duration": 130,
    "pages_visited": 5,
    "location": "Mumbai, India",
    "device_type": "Tablet"
  }
];


// Get analytics for all users
app.get('/analytics', (req, res) => {
    res.json(userAnalytics);
});

// Get analytics for a specific user
app.get('/analytics/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const analytics = userAnalytics.find(user => user.userId === userId);
    if (analytics) {
        res.json(analytics);
    } else {
        res.status(404).send('User not found');
    }
});

// Update analytics for a user (e.g., increment login count)
app.put('/analytics/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userIndex = userAnalytics.findIndex(user => user.userId === userId);
    if (userIndex !== -1) {
        userAnalytics[userIndex].loginCount += 1; // Increment login count
        userAnalytics[userIndex].lastLogin = new Date().toISOString().split('T')[0]; // Update last login date
        res.json(userAnalytics[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(PORT, () => {
    console.log(`User Analytics Microservice running on port ${PORT}`);
});
