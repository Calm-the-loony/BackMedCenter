import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";
import {User} from "./User.entity.js";

@Entity({ name: 'users_types' })
export class UserTypes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 125, nullable: false})
    type: string;

    @OneToMany(() => User, (user) => user.userType)
    users: Array<User>;
}