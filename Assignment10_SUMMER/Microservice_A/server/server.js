const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock data to simulate database
const loginTrendsAnalytics = [
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


const realTimeActivityAlertAnalytics = [
	{
		"userId": 1,
		"type": "payment",
		"timestamp": "2024-05-23T12:30:45Z",
		"transactionId": "TX123456789",
		"amount": 250.00,
		"currency": "USD",
		"paymentMethod": "credit_card",
		"status": "completed"
	},
	{
		"userId": 2,
		"type": "payment",
		"timestamp": "2024-05-23T13:40:20Z",
		"transactionId": "TX987654321",
		"amount": 125.75,
		"currency": "USD",
		"paymentMethod": "paypal",
		"status": "pending"
	},
	{
		"userId": 3,
		"type": "payment",
		"timestamp": "2024-05-23T14:50:10Z",
		"transactionId": "TX123789456",
		"amount": 89.99,
		"currency": "EUR",
		"paymentMethod": "debit_card",
		"status": "completed"
	},
	{
		"userId": 4,
		"type": "payment",
		"timestamp": "2024-05-23T15:05:30Z",
		"transactionId": "TX456123789",
		"amount": 300.00,
		"currency": "GBP",
		"paymentMethod": "bank_transfer",
		"status": "failed"
	},
	{
		"userId": 5,
		"type": "payment",
		"timestamp": "2024-05-23T16:20:15Z",
		"transactionId": "TX789456123",
		"amount": 45.50,
		"currency": "USD",
		"paymentMethod": "credit_card",
		"status": "completed"
	}
];

const userPersonalizedUsageAnalytics = [
{
  "userId": "1",
  "reportGeneratedAt": "2024-05-23T17:00:00Z",
  "usageSummary": {
    "totalLogins": 45,
    "totalTimeSpent": "30h 15m",
    "mostUsedFeature": "dashboard",
    "lastLogin": "2024-05-22T14:10:30Z"
  },
  "dailyUsage": [
    {
      "date": "2024-05-17",
      "timeSpent": "3h 20m",
      "actions": [
        {"feature": "dashboard", "count": 10},
        {"feature": "profile", "count": 2},
        {"feature": "reports", "count": 5}
      ]
    },
    {
      "date": "2024-05-18",
      "timeSpent": "4h 10m",
      "actions": [
        {"feature": "dashboard", "count": 12},
        {"feature": "file_upload", "count": 3},
        {"feature": "settings", "count": 1}
      ]
    },
    {
      "date": "2024-05-19",
      "timeSpent": "2h 50m",
      "actions": [
        {"feature": "reports", "count": 8},
        {"feature": "dashboard", "count": 7},
        {"feature": "notifications", "count": 4}
      ]
    },
    {
      "date": "2024-05-20",
      "timeSpent": "5h 35m",
      "actions": [
        {"feature": "dashboard", "count": 15},
        {"feature": "profile", "count": 5},
        {"feature": "reports", "count": 6}
      ]
    },
    {
      "date": "2024-05-21",
      "timeSpent": "3h 10m",
      "actions": [
        {"feature": "file_upload", "count": 4},
        {"feature": "dashboard", "count": 11},
        {"feature": "settings", "count": 2}
      ]
    }
  ],
  "recommendations": {
    "increaseUsageOfFeatures": ["file_upload", "settings"],
    "reduceTimeSpentOn": ["dashboard"],
    "tips": [
      "Explore the 'settings' feature to customize your experience.",
      "Utilize 'file_upload' for better document management.",
      "Balance your time across various features for a more efficient workflow."
    ]
  }
}
];



// Get analytics for all users
app.get('/analytics', (req, res) => {
    res.json(loginTrendsAnalytics);
});

// Get analytics for all users
app.get('/analytics/loginTrendAnalytics', (req, res) => {
    res.json(loginTrendsAnalytics);
});

// Get payment analytics for all users
app.get('/analytics/realTimeActivityAlertAnalytics', (req, res) => {
    res.json(realTimeActivityAlertAnalytics);
});

// Get payment analytics for all users
app.get('/analytics/personalizedUsageAnalytics', (req, res) => {
    res.json(userPersonalizedUsageAnalytics);
});

// Get analytics for a specific user
app.get('/analytics/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const analytics = loginTrendsAnalytics.find(user => user.userId === userId);
    if (analytics) {
        res.json(analytics);
    } else {
        res.status(404).send('User not found');
    }
});

// Update analytics for a user (e.g., increment login count)
app.put('/analytics/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userIndex = loginTrendsAnalytics.findIndex(user => user.userId === userId);
    if (userIndex !== -1) {
        loginTrendsAnalytics[userIndex].loginCount += 1; // Increment login count
        loginTrendsAnalytics[userIndex].lastLogin = new Date().toISOString().split('T')[0]; // Update last login date
        res.json(loginTrendsAnalytics[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

// Update payment analytics for a user (e.g., increment login count)
app.put('/analytics/paymentAnalytics/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userIndex = userPaymentAnalytics.findIndex(user => user.userId === userId);
    if (userIndex !== -1) {
        userPaymentAnalytics[userIndex].loginCount += 1; // Increment login count
        userPaymentAnalytics[userIndex].lastLogin = new Date().toISOString().split('T')[0]; // Update last login date
        res.json(userPaymentAnalytics[userIndex]);
    } else {
        res.status(404).send('Payment for User not found');
    }
}); 


app.listen(PORT, () => {
    console.log(`User Analytics Microservice running on port ${PORT}`);
});
