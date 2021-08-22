require('dotenv').config({ debug: true });
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

console.log(process.env.gmailPW);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'julschong7@gmail.com',
        pass: process.env.gmailPW
    }
});

console.log(path.resolve(__dirname + '/email.ejs'));

const sendEmail = (name) => {
    ejs.renderFile(
        path.resolve(__dirname + '/email.ejs'),
        { name },
        function (err, data) {
            if (err) {
                console.log(err);
            } else {
                const mainOptions = {
                    from: '"julschong7" julschong7@gmail.com',
                    to: '2christinehong@gmail.com',
                    subject: 'Hello, this is sent from a program lol',
                    html: data
                };
                console.log(
                    'html data ======================>',
                    mainOptions.html
                );
                transporter.sendMail(mainOptions, function (err, info) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Message sent: ' + info.response);
                    }
                });
            }
        }
    );
};

sendEmail('yoyoyoo!');
