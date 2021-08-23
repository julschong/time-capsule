import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Email {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    fromEmail: string;

    @Column()
    toEmail: string;

    @Column()
    subject: string;

    @Column()
    body: string;

    @Column({ type: 'date' })
    sendDate: string;

    @Column({ default: false })
    sent: boolean;
}
