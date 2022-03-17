import { Connection, createConnection, ConnectionOptions } from "typeorm";
import configTypeorm from "../config/ormconfig.json";

class BaseConnection {

    private static instance: Connection;

    public static get databaseInstance() {
        return this.configDatabase();
    }

    public static async configDatabase() {
        console.log('NOVA CONEXAO');
        return await createConnection(configTypeorm as ConnectionOptions);
    }
}

export default BaseConnection;