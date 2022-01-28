import { Position } from "./enum/Position";

export class Employee {
    private _id: string;
    private _name: string;
    private _email: string;
    private _cpf: string;
    private _position: Position;

    constructor(){}

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(cpf: string) {
        this._cpf = cpf;
    }

    public get position(): Position {
        return this._position;
    }

    public set position(position: Position) {
        this._position = position;
    }
    
}