import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "@models/employee";
import { Status } from "@models/enum/Status";

@Entity({ name: "Company" })
export class Company extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    fantasyName: string;

    @Column({ type: 'varchar' })
    cnpj: string;

    @OneToMany(() => Employee, employee => employee)
    employees: Employee[];

    @Column({ type: 'varchar' })
    status: Status;
}