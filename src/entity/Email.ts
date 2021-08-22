import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Email {
    @PrimaryGeneratedColumn()
    id: number;

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

    @Column()
    sendDate: Date;
}
