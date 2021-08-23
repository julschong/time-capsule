import { Email } from '../entity/Email';
import { getRepository, Like } from 'typeorm';
import sendMail from './mailer';
import fs from 'fs';
import path from 'path';
import { today } from '../util/dateUtil';

export const job = () => {
    setInterval(async () => {
        const emailRepo = getRepository(Email);
        const todayString = today();

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
