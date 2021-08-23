import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Email } from './Email';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Email, (email) => email.user)
    emails: Email[];
}
