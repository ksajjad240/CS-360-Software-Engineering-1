const axios = require('axios');

const _USER_BASE_URL = 'http://localhost:3000/analytics';
const _PAYMENT_BASE_URL = 'http://localhost:3000/analytics/paymentAnalytics';
const _USER_PREF_URL = 'http://localhost:4000/userPreferences';

// Function to get analytics for all users
async function getAllUserAnalytics() {
    try {
        const response = await axios.get(_USER_BASE_URL);
        console.log('All User Analytics:', response.data);
    } catch (error) {
        console.error('Error fetching all user analytics:', error.message);
    }
}

// Function to get analytics for a specific user
async function getUserAnalytics(userId) {
    try {
        const response = await axios.get(`${_USER_BASE_URL}/${userId}`);
        console.log(`Analytics for User ${userId}:`, response.data);
    } catch (error) {
        console.error(`Error fetching analytics for user ${userId}:`, error.message);
    }
}

// Function to get analytics for a specific user
async function getLoginTrendAnalytics(userId) {
    try {
        const response = await axios.get(`${_USER_BASE_URL}/${userId}`);
        console.log(`Login Trend Analytics for User ${userId}:`, response.data);
    } catch (error) {
        console.error(`Error fetching analytics for user ${userId}:`, error.message);
    }
}

// Function to update analytics for a specific user
async function updateUserAnalytics(userId) {
    try {
        const response = await axios.put(`${_USER_BASE_URL}/${userId}`);
        console.log(`Updated Analytics for User ${userId}:`, response.data);
    } catch (error) {
        console.error(`Error updating analytics for user ${userId}:`, error.message);
    }
}

// Function to get user payment analytics for a specific user
async function getUserPaymentAnalytics() {
    try {
        const response = await axios.get(`${_USER_BASE_URL}/paymentAnalytics/`);
        console.log(`User Payment Analytics`, response.data);
    } catch (error) {
        console.error(`Error fetching payment analytics:`, error.message);
    }
}


// Function to get realtime activity alert analytics for a specific user
async function getRealTimeActivityAlertAnalytics() {
    try {
        const response = await axios.get(`${_USER_BASE_URL}/realTimeActivityAlertAnalytics/`);
        console.log(`Realtime Activity Alert Analytics`, response.data);
    } catch (error) {
        console.error(`Error fetching realtime activity alert analytics:`, error.message);
    }
}

// Function to get realtime activity alert analytics for a specific user
async function getPersonalizedUsageAnalytics() {
    try {
        const response = await axios.get(`${_USER_BASE_URL}/personalizedUsageAnalytics/`);
        console.log(`Personalized Usage Report Analytics`, response.data);
    } catch (error) {
        console.error(`Error fetching realtime activity alert analytics:`, error.message);
    }
}

// Function to get analytics for a specific user
async function getUserPreferences(userId) {
    try {
        const response = await axios.get(`${_USER_PREF_URL}/${userId}`);
        console.log(`User Preferences for User ${userId}:`, response.data);
    } catch (error) {
        console.error(`Error fetching analytics for user ${userId}:`, error.message);
    }
}

// Example usage
getAllUserAnalytics();
getUserAnalytics(1);
getUserAnalytics(2);

getLoginTrendAnalytics(1);
getRealTimeActivityAlertAnalytics();
getPersonalizedUsageAnalytics();
getUserPreferences(1);