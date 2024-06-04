const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

// Secret key for JWT
const SECRET_KEY = 'your_secret_key';

let payments1 = [
    {
      "id": "uuid-1",
      "vendor": "Rent",
      "amount": 1200,
      "dueDate": "2024-06-01",
      "status": "Pending"
    },
    {
      "id": "uuid-2",
      "vendor": "Electricity",
      "amount": 150,
      "dueDate": "2024-06-05",
      "status": "Pending"
    },
    {
      "id": "uuid-3",
      "vendor": "Internet",
      "amount": 60,
      "dueDate": "2024-06-10",
      "status": "Pending"
    },
    {
      "id": "uuid-4",
      "vendor": "Water",
      "amount": 45,
      "dueDate": "2024-05-15",
      "status": "Pending"
    },
    {
      "id": "uuid-5",
      "vendor": "Gym",
      "amount": 30,
      "dueDate": "2024-05-20",
      "status": "Pending"
    },
    {
      "id": "uuid-6",
      "vendor": "Car Loan",
      "amount": 400,
      "dueDate": "2024-06-25",
      "status": "Pending"
    },
    {
      "id": "uuid-7",
      "vendor": "Credit Card",
      "amount": 200,
      "dueDate": "2024-05-30",
      "status": "Pending"
    },
    {
      "id": "uuid-8",
      "vendor": "Insurance",
      "amount": 100,
      "dueDate": "2024-07-01",
      "status": "Pending"
    },
    {
      "id": "uuid-9",
      "vendor": "Netflix",
      "amount": 15,
      "dueDate": "2024-07-05",
      "status": "Pending"
    },
    {
      "id": "uuid-10",
      "vendor": "Spotify",
      "amount": 10,
      "dueDate": "2024-07-10",
      "status": "Pending"
    },
    {
      "id": "uuid-11",
      "vendor": "Phone",
      "amount": 50,
      "dueDate": "2024-07-15",
      "status": "Pending"
    },
    {
      "id": "uuid-12",
      "vendor": "Internet",
      "amount": 60,
      "dueDate": "2024-07-20",
      "status": "Pending"
    },
    {
      "id": "uuid-13",
      "vendor": "Electricity",
      "amount": 150,
      "dueDate": "2024-07-25",
      "status": "Pending"
    },
    {
      "id": "uuid-14",
      "vendor": "Rent",
      "amount": 1200,
      "dueDate": "2024-08-01",
      "status": "Pending"
    },
    {
      "id": "uuid-15",
      "vendor": "Water",
      "amount": 45,
      "dueDate": "2024-08-05",
      "status": "Pending"
    },
    {
      "id": "uuid-16",
      "vendor": "Car Loan",
      "amount": 400,
      "dueDate": "2024-08-10",
      "status": "Pending"
    }
  ];


let payments2 = [
    {
      "id": "uuid-101",
      "vendor": "Rent",
      "amount": 1200,
      "dueDate": "2024-05-01",
      "paymentDate": "2024-05-01",
      "status": "Paid"
    },
    {
      "id": "uuid-102",
      "vendor": "Electricity",
      "amount": 150,
      "dueDate": "2024-05-05",
      "paymentDate": "2024-05-04",
      "status": "Paid"
    },
    {
      "id": "uuid-103",
      "vendor": "Internet",
      "amount": 60,
      "dueDate": "2024-05-10",
      "paymentDate": "2024-05-10",
      "status": "Paid"
    },
    {
      "id": "uuid-104",
      "vendor": "Water",
      "amount": 45,
      "dueDate": "2024-04-15",
      "paymentDate": "2024-04-14",
      "status": "Paid"
    },
    {
      "id": "uuid-105",
      "vendor": "Gym",
      "amount": 30,
      "dueDate": "2024-04-20",
      "paymentDate": "2024-04-19",
      "status": "Paid"
    },
    {
      "id": "uuid-106",
      "vendor": "Car Loan",
      "amount": 400,
      "dueDate": "2024-05-25",
      "paymentDate": "2024-05-24",
      "status": "Paid"
    },
    {
      "id": "uuid-107",
      "vendor": "Credit Card",
      "amount": 200,
      "dueDate": "2024-04-30",
      "paymentDate": "2024-04-29",
      "status": "Paid"
    },
    {
      "id": "uuid-108",
      "vendor": "Insurance",
      "amount": 100,
      "dueDate": "2024-04-01",
      "paymentDate": "2024-03-31",
      "status": "Paid"
    },
    {
      "id": "uuid-109",
      "vendor": "Netflix",
      "amount": 15,
      "dueDate": "2024-04-05",
      "paymentDate": "2024-04-04",
      "status": "Paid"
    },
    {
      "id": "uuid-110",
      "vendor": "Spotify",
      "amount": 10,
      "dueDate": "2024-02-10",
      "paymentDate": "2024-02-09",
      "status": "Paid"
    },
	{
      "id": "uuid-111",
      "vendor": "Spotify",
      "amount": 11,
      "dueDate": "2024-03-10",
      "paymentDate": "2024-03-09",
      "status": "Paid"
    },
	{
      "id": "uuid-112",
      "vendor": "Spotify",
      "amount": 12,
      "dueDate": "2024-04-10",
      "paymentDate": "2024-04-09",
      "status": "Paid"
    }
  ];

// In-memory user store
let users = [];


const getUpcomingPayments = () => {
    const today = new Date().toISOString().split('T')[0];
    return payments1.filter(payment1 => payment1.dueDate > today && payment1.status === 'Pending');
};

const getCurrentPayments = () => {
    const today = new Date().toISOString().split('T')[0];
    return payments1.filter(payment1 => payment1.dueDate <= today && payment1.status === 'Pending');
};

const getPaymentHistory = () => {
	const today = new Date().toISOString().split('T')[0];
	return payments2.filter(payment2 => payment2.dueDate <= today && payment2.status === 'Paid');
};

const searchPaymentsByVendor = (vendor) => {
	const today = new Date().toISOString().split('T')[0];
    return payments2.filter(payment => 
        payment.vendor.toLowerCase() === vendor.toLowerCase() &&
        payment.dueDate <= today && 
        payment.status === 'Paid'
    );
	
};

// User Registration
const registerUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = {id: uuidv4(), username, password: hashedPassword
    };

    // Store the user
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
};

// User Authentication
const authenticateUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Find the user
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: 'Authentication successful', token });
};




// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route to obtain upcoming payments
app.get('/paymentManagement/upcomingPayments', (req, res) => {
    res.json(getUpcomingPayments());
});

// Route to obtain current payments
app.get('/paymentManagement/currentPayments', (req, res) => {
    res.json(getCurrentPayments());
});

// Route to obtain payment history
app.get('/paymentManagement/paymentHistory', (req, res) => {
    res.json(getPaymentHistory());
});

// Route for searching payments
app.get('/paymentManagement/searchPaymentsByVendor', (req, res) => {
	
	const { vendor } = req.query;
    if (!vendor) {
        return res.status(400).json({ error: 'Vendor query parameter is required' });
    }
	
	console.log("Vendor .... = " + vendor);
    const results = searchPaymentsByVendor(vendor);
    res.json(results);
});

// Route for user registration
app.post('/paymentManagement/register', registerUser);

// Route for user authentication
app.post('/paymentManagement/login', authenticateUser);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
