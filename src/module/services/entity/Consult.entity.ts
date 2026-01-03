import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column
} from 'typeorm';


@Entity({ name: "consults" })
export class Consult {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 125, default: "Пользователь", nullable: true })
  username!: string;

  @Column({ type: "text", default: "Жалобы пользователя", nullable: true })
  сomplaints!: string;

  @CreateDateColumn()
  createdAt!: Date;
}