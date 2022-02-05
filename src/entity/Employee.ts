import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";
import { Position } from "./enum/Position";

@Entity({ name: "Employee" })
export class Employee extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  private id: number;

  @Column({ type: 'varchar' })
  private name: string;

  @Column({ type: 'varchar' })
  private email: string;

  @Column({ type: 'varchar' })
  private cpf: string;

  @Column({ type: 'varchar' })
  private position: Position;

  @ManyToOne(() => Company, company => company)
  private company: Company;
}
