const { error, info } = require('console');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'my-email@gmail.com',
        pass: 'my-password',
    },
});

const mailOptions = {
    from: 'my-email@gmail.com',
    to: 'my-email@gmail.com',
    subject: 'Test Email',
    message: 'Hello from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Email sent:', info.message)
    }
});