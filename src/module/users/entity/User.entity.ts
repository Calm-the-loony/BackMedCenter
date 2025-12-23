import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

export enum UserTypes {
    DOCTOR = 'doctor',
    PACIENT = 'pacient',
    REGISTER = 'register',
    MANAGER = 'manager'
}

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 125, unique: true, nullable: false })
    email!: string;

    @Column({ type: 'text', nullable: false })
    password!: string;

    @Column({ type: 'varchar', length: 255, nullable: true, default: 'Пользователь' })
    fullName!: string;

    @Column({ type: 'boolean', nullable: true, default: false })
    isAdmin!: boolean;

    @CreateDateColumn({ type: 'date', nullable: false })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'date', nullable: true })
    updatedAt!: Date;

    @Column({ type: 'enum', enum: UserTypes, default: UserTypes.PACIENT, })
    userType!: UserTypes;
}