import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import fs from 'fs';

// async..await is not allowed in global scope, must use a wrapper

type Mail = {
    name: string;
    fromEmail: string;
    toEmail: string;
    subject: string;
    body: string;
    createdDate: Date;
    uploadedImage: string;
    originalFileName: string;
};

const sendMail = async (mail: Mail) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'julschong7@gmail.com', // generated ethereal user
            pass: process.env.gmailPW // generated ethereal password
        }
    });

    // send mail with defined transport object
    const {
        name,
        body,
        createdDate,
        fromEmail,
        toEmail,
        subject,
        uploadedImage,
        originalFileName
    } = mail;

    ejs.renderFile(
        path.resolve(__dirname, '../../view/mail.ejs'),
        { name, body: body.split('\n'), createdDate, fromEmail, toEmail },
        async function (err, data) {
            let info = await transporter.sendMail({
                from: `"${name} 👻"`, // sender address
                to: `${toEmail}`, // list of receivers
                subject: `${subject}`, // Subject line
                // text: `${body}` // plain text body
                html: data,
                attachments: uploadedImage
                    ? [
                          {
                              filename: originalFileName,
                              path: path.resolve(
                                  __dirname,
                                  `../../${uploadedImage}`
                              )
                          }
                      ]
                    : undefined
            });

            uploadedImage &&
                (await fs.unlinkSync(
                    path.resolve(__dirname, `../../${uploadedImage}`)
                ));
            console.log(`mail sent`);
        }
    );
};

export default sendMail;
