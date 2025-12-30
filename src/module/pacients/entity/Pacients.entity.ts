// @ts-nocheck

import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";

import { StatusPacient } from "@/utils/shared/entities_enums.js";


@Entity({ name: 'pacients' })
export class Pacients {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description!: string;

    @Column({ type: 'date', nullable: true })
    dateVisit!: Date;

    @Column({ type: 'enum', enum: StatusPacient, default: StatusPacient.UNDEFINED })
    status!: StatusPacient;

    @ManyToOne('User', user => user.pacients)
    @JoinColumn({ name: "pacientId" })
    pacient!: Record<string, any>;

    @ManyToOne('User', user => user.doctors)
    @JoinColumn({ name: "doctorId" })
    doctor!: Record<string, any>;
}