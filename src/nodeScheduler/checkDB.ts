import schedule from 'node-schedule';

const rule = new schedule.RecurrenceRule();
rule.second = 5;

import { Email } from '../entity/Email';
import { getRepository, Like } from 'typeorm';
import sendMail from './mailer';

export const job = () => {
    setInterval(async () => {
        const emailRepo = getRepository(Email);
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const todayString = `${yyyy}-${mm}-${dd}`;

        const emails = await emailRepo.find({
            sendDate: todayString,
            sent: false
        });
        emails.forEach(async ({ name, toEmail, subject, body, id }) => {
            await sendMail(name, toEmail, subject, body);
            await emailRepo.update({ id }, { sent: true });
            console.log(`mail sent`);
        });
    }, 10 * 1000);
};
