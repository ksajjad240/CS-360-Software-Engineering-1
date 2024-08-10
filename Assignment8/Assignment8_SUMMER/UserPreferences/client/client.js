const axios = require('axios');

const _USER_BASE_URL = 'http://localhost:4000/userPreferences';

// Function to get preferences for all users
async function getAllUserPreferences() {
    try {
        const response = await axios.get(_USER_BASE_URL);
        console.log('All User Preferences:', response.data);
    } catch (error) {
        console.error('Error fetching all user preferences:', error.message);
    }
}

// Function to get preferences for a specific user
async function getUserPreferences(userId) {
    try {
        const response = await axios.get(`${_USER_BASE_URL}/${userId}`);
        console.log(`Preferences for User ${userId}:`, response.data);
    } catch (error) {
        console.error(`Error fetching preferences for user ${userId}:`, error.message);
    }
}


// Example usage
getAllUserPreferences();
getUserPreferences(1);
getUserPreferences(2);