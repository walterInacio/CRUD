import express from "express";
import EmployeeController from "@controllers/employeeController";

export default (app: express.Application) => {
    const BASE_PATH = "/employee";
    app.post(`${BASE_PATH}/create`, EmployeeController.create);
    app.get(`${BASE_PATH}/:id`, EmployeeController.getById);
    app.get(`${BASE_PATH}/all`, EmployeeController.getAll);
    app.patch(`${BASE_PATH}/update/:id`, EmployeeController.update);
}
