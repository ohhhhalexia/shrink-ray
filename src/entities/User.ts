@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userID: string;
    
    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    passwordHash: string;

    @Column({ default: false })
    isPro: boolean;

    @Column({ default: false })
    isAdmin: boolean;
}
