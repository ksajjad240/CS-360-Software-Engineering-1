const axios = require('axios');

const SERVER_URL = 'http://localhost:5000/paymentManagement';
const _USER_BASE_URL = 'http://localhost:3000/analytics';

// Function to get upcoming payments
const getUpcomingPayments = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/upcomingPayments`);
        console.log('Upcoming Payments:', response.data);
    } catch (error) {
        console.error('Error fetching upcoming payments:', error);
    }
};

// Function to get current payments
const getCurrentPayments = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/currentPayments`);
        console.log('Current Payments:', response.data);
    } catch (error) {
        console.error('Error fetching current payments:', error);
    }
};

// Function to get current payments
const getPaymentHistory = async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/paymentHistory`);
        console.log('Payments History:', response.data);
    } catch (error) {
        console.error('Error fetching current payments:', error);
    }
};

// Function to get current payments
const searchPaymentsByVendor = async (vendor) => {
    try {		
		const response = await axios.get(`${SERVER_URL}/searchPaymentsByVendor`, {params: { vendor }});	
        console.log('Search Payments:', response.data);
    } catch (error) {
        console.error('Error fetching current payments:', error);
    }
};

// Function to register a new user
const registerUser = async (username, password) => {
    try {
        const response = await axios.post(`${SERVER_URL}/register`, {username, password});
        console.log('User registered successfully:', response.data);
    } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
    }
};

// Function to authenticate a user
const authenticateUser = async (username, password) => {
    try {
        const response = await axios.post(`${SERVER_URL}/login`, {username, password});
        console.log('Authentication successful:', response.data);
        // You can store the token for future use
        localStorage.setItem('token', response.data.token);
    } catch (error) {
        console.error('Error authenticating user:', error.response ? error.response.data : error.message);
    }
};

// Function to get analytics for a specific user
async function getLoginTrendAnalytics(userId) {
    try {
		console.log ("..***..");
        const response = await axios.get(`${_USER_BASE_URL}/${userId}`);
        console.log(`Login Trend Analytics for User ${userId}:`, response.data);
    } catch (error) {
        console.error(`Error fetching analytics for user ${userId}:`, error.message);
    }
}

// Execute the functions
getUpcomingPayments();
getCurrentPayments();
getPaymentHistory();
searchPaymentsByVendor('Spotify');
registerUser('testuser', 'testpassword');
authenticateUser('testuser', 'testpassword');
getLoginTrendAnalytics(1);