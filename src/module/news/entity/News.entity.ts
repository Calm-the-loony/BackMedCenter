import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
} from "typeorm";

import { NewsTypes } from "@/utils/shared/entities_enums.js";
import { User } from "@/module/users/entity/User.entity.js";

@Entity({ name: "news" })
export class News {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'enum',
        enum: NewsTypes,
        default: NewsTypes.GENERAL,
        nullable: true
    })
    type!: NewsTypes;

    @Column({
        type: 'varchar',
        nullable: true,
        default: 'Новость',
        length: 125
    })
    title!: string;

    @Column({
        type: 'text',
        nullable: true,
        default: 'Описание новости'
    })
    description!: string;

    @CreateDateColumn({ nullable: true })
    createDate!: Date;

    @UpdateDateColumn({ nullable: true })
    updateDate!: Date;

    @OneToOne(() => User)
    @JoinColumn()
    user!: User;
}