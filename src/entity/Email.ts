import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';
import { User } from './User';

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
    sendDate: Date;

    @Column({ default: false })
    sent: boolean;

    @Column({ nullable: true })
    uploadedImage: string;

    @Column({ nullable: true })
    originalFileName: string;

    @CreateDateColumn({ type: 'date' })
    createdDate: Date;

    @ManyToOne(() => User, (user) => user.emails)
    user: User;
}
