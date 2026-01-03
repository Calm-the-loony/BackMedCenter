// @ts-nocheck

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { ClinicTypes } from "@/utils/shared/entities_enums";
import { User } from "@/module/users";

@Entity({ name: "services" })
export class Service {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 150, nullable: true, default: null })
  title!: string;

  @Column({ type: "text", nullable: true, default: null })
  description!: string;

  @Column({ type: "varchar", length: 40, nullable: true, default: null })
  timeWork: string;

  @Column({ type: "int", nullable: true, default: 0 })
  recLike!: number;

  @Column({ type: "int", nullable: true, default: 0 })
  recDeslike!: number;

  @Column({ type: "enum", enum: ClinicTypes, default: ClinicTypes.OTHER, nullable: false })
  clinicType!: ClinicTypes;

  @Column({ type: "decimal", nullable: false, default: 2500 })
  price!: number;

  @ManyToMany(() => User, (user) => user.services)
  @JoinTable({
    name: "service_doctors",
    joinColumn: { name: "serviceId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "doctorId", referencedColumnName: "id" }
  })
  doctors!: Array<Record<string, any>>;
}