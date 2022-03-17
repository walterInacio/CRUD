import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "@models/employee";
import { Status } from "@models/enum/Status";

@Entity({ name: "Company" })
export class Company extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    private id: number;

    @Column({ type: 'varchar' })
    private name: string;

    @Column({ type: 'varchar' })
    private fantasyName: string;

    @Column({ type: 'varchar' })
    private cnpj: string;

    @OneToMany(() => Employee, employee => employee)
    private employees: Employee[];

    @Column({ type: 'varchar' })
    private status: Status;
}