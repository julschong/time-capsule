import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
const sendMail = async (
    name: string,
    toEmail: string,
    subject: string,
    body: string
) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'julschong7@gmail.com', // generated ethereal user
            pass: process.env.gmailPW // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"${name} 👻"`, // sender address
        to: `${toEmail}`, // list of receivers
        subject: `${subject}`, // Subject line
        text: `${body}` // plain text body
    });
};

export default sendMail;
