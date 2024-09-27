const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const path = require('path');
const cors = require("cors");

const app = express();



app.use(cors({
    origin: 'http://localhost:62995',  // Replace with your frontend's localhost port
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));



const PORT = process.env.PORT || 8001;

const mg = mailgun({
    apiKey: 'b25c7ec9574e19ee4f457845e0cf956f-1b5736a5-85cfe861',
    domain: 'sandbox9ee3137dde694e46b201251bb07a00a6.mailgun.org',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the subscribe form submission
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    const data = {
        from: 'Dev@Deakin <noreply@sandbox9ee3137dde694e46b201251bb07a00a6.mailgun.org>',
        to: email,
        subject: 'Welcome to Dev@Deakin!',
        text: 'Thank you for subscribing to Dev@Deakin!'
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            return res.status(500).json({ message: 'Error in sending email', error });
        }
        res.status(200).json({ message: 'Welcome email sent successfully', body });
    });
});

// Serve the index.html file as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
