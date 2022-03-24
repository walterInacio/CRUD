import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "@models/company";
import { Position } from "@models/enum/Position";

@Entity({ name: "employee" })
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  cpf: string;

  @Column({ type: 'varchar' })
  position: Position;

  @ManyToOne(() => Company, company => company.id)
  company: string;
}
