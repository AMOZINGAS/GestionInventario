import express from "express";
import bodyParse from "body-parser";
import productRoutes from "./routes/productRoutes";
import { AppDataSource } from "./data-source";
import dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize();

const app = express();

app.use(bodyParse.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT;

app.listen( PORT, () => {

    console.log(`Servidor ejecutándose en el puerto ${PORT}`)

});