import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({

    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],

});

AppDataSource.initialize().then(() => {

    console.log("Connection successful");

}).catch((error) => console.log(error));