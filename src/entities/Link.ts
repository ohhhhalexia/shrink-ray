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
}
