import { Email } from '../entity/Email';
import { getRepository, Like } from 'typeorm';
import sendMail from './mailer';
import fs from 'fs';
import path from 'path';

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
        emails.forEach(async (email) => {
            await sendMail(email);
            await emailRepo.update({ id: email.id }, { sent: true });
        });
    }, 10 * 1000);
};
