import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UserTypes } from "./UserTypes.entity.js";


@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 125, nullable: false })
    email: string;

    @Column({ type: 'text', nullable: false })
    password: string;

    @Column({ type: 'varchar', length: 255, nullable: true, default: 'Пользователь' })
    fullName: string;

    @Column({ type: 'boolean', nullable: true, default: false })
    isAdmin: boolean;

    @Column({ type: 'date', nullable: false, default: Date.now() })
    createdAt: Date;

    @Column({ type: 'date', nullable: false, default: Date.now() })
    updatedAt: Date;

    @ManyToOne(() => UserTypes, (userTypes) => userTypes.users)
    userType: UserTypes
}