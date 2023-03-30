import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Link {
    @PrimaryGeneratedColumn()
    linkID: string;

    @Column()
    originalURL: string;

    @Column()
    lastAccessedOn: Date;

    @Column({ default: 0 })
    numHits: number;

    @ManyToOne(() => User, (user) => user.links, { cascade: ['insert', 'update'] })
    user: Relation<User>;
}
