import { Employee } from "./Employee";
import { Status } from "./enum/Status";

export class Company {
    private _id: number;
    private _name: string;
    private _fantasyName: string;
    private _cnpj: string;
    private _employees: Employee[];
    private _status: Status;
    
    constructor() {}
    
    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get fantasyName(): string {
        return this._fantasyName;
    }

    public set fantasyName(fantasyName: string) {
        this._fantasyName = fantasyName;
    }

    public get cnpj(): string {
        return this._cnpj;
    }

    public set cnpj(cnpj: string) {
        this._cnpj = cnpj;
    }

    public get employees(): Employee[] {
        return this._employees;
    }

    public set employees(employees: Employee[]) {
        this._employees = employees;
    }

    public get status(): Status {
        return this._status;
    }

    public set status(status: Status) {
        this._status = status;
    }


}