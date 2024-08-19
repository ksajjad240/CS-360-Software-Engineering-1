// client.js

const SERVER_URL = 'http://localhost:3000/paymentManagement';

async function fetchUpcomingPayments() {
    try {
        const response = await axios.get(`${SERVER_URL}/upcomingPayments`);
        displayPayments(response.data, 'upcomingPayments');
    } catch (error) {
        console.error('Error fetching upcoming payments:', error);
    }
}

async function fetchCurrentPayments() {
    try {
        const response = await axios.get(`${SERVER_URL}/currentPayments`);
        displayPayments(response.data, 'currentPayments');
    } catch (error) {
        console.error('Error fetching current payments:', error);
    }
}

function displayPayments(payments, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    if (payments.length === 0) {
        container.innerHTML = '<p>No payments found.</p>';
        return;
    }
    payments.forEach(payment => {
        const paymentDiv = document.createElement('div');
        paymentDiv.className = 'payment';
        paymentDiv.innerHTML = `
            <p><strong>Vendor:</strong> ${payment.vendor}</p>
            <p><strong>Amount:</strong> $${payment.amount}</p>
            <p><strong>Due Date:</strong> ${payment.dueDate}</p>
            <p><strong>Status:</strong> ${payment.status}</p>
        `;
        container.appendChild(paymentDiv);
    });
}
