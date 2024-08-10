const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());


// Mock data to simulate database
const userPreferences = 
[
	{
		"userId": 1,
		"notifications.email": true,
		"notifications.sms": false,
		"notifications.push": true,
		"preferences.theme": "dark",
		"preferences.language": "en",
		"defaultPaymentMethod": "credit_card",
		"notificationTimes.morning": "08:00",
		"notificationTimes.evening": "18:00"
	},
	{
		"userId": 2,
		"notifications.email": true,
		"notifications.sms": true,
		"notifications.push": false,
		"preferences.theme": "light",
		"preferences.language": "es",
		"defaultPaymentMethod": "paypal",
		"notificationTimes.morning": "07:30",
		"notificationTimes.evening": "19:00"
	},
	{
		"userId": 3,
		"notifications.email": false,
		"notifications.sms": true,
		"notifications.push": true,
		"preferences.theme": "dark",
		"preferences.language": "fr",
		"defaultPaymentMethod": "bank_transfer",
		"notificationTimes.morning": "09:00",
		"notificationTimes.evening": "20:00"
	},
	{
		"userId": 4,
		"notifications.email": true,
		"notifications.sms": true,
		"notifications.push": true,
		"preferences.theme": "light",
		"preferences.language": "de",
		"defaultPaymentMethod": "debit_card",
		"notificationTimes.morning": "06:30",
		"notificationTimes.evening": "17:30"
	}
];

// Get user preferences for all users
app.get('/userPreferences', (req, res) => {
    res.json(userPreferences);
});

// Get preferences for a specific user
app.get('/userPreferences/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const preferences = userPreferences.find(user => user.userId === userId);
    if (preferences) {
        res.json(preferences);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(PORT, () => {
    console.log(`User Preferences Microservice running on port ${PORT}`);
});