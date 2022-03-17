import { Employee } from "src/models/employee";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

class EmployeeController {

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await Employee.getRepository().save({ ...req.body });
            res.status(StatusCodes.OK).send();
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).send(error);
        }
        next();
    }

    public async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {            
            const result = await Employee.getRepository().findOne(req.params.id);
            if (result) {
                res.status(StatusCodes.OK).send(result);
            }
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).send(error);
        }
        next();
    }

    public async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await Employee.getRepository().findAndCount();
            if (result) {
                res.status(StatusCodes.OK).send(result[0]);
            }
        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).send(error);
        }
        next();
    }

}

export default new EmployeeController();